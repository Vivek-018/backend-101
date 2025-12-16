import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import z,{ AnyZodObject, ZodError } from 'zod';
import { envConfigs } from '../config/envconfig';
import passport from 'passport';
import { OtpVerificationMethods, TokenTypes } from '../enums';
import AuthService from '../services/auth';
import { decodedOtpToken } from '../interfaces';
import { sanitizeInputString } from '../validators/helpers/validatorHelper';

const TokenHeaderSchema = z.object({
    authorization: z.string().regex(/^Bearer\s+[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/, {
      message: "Invalid Authorization token format"
  })
});

const validateRequestHeader = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
      await schema.parseAsync(req.headers);
      next();
  } catch (error) {
      // TODO: include exact field name which caused the error and include the message
      return res.status(400).send({ status: false, message: `Invalid Headers: ${error?.message}` });
  }
};

const verifyCallback = (req:Request, resolve:any, reject:any,res:Response) => async (err:any, user:any, info:any) => {
  if (err || info || !user) {
    return reject(new Error('UNAUTHOURIZED USER'));
  }
  req["user"] = user;
  resolve();
};

export const authenticateUserJwt = () => async (req:Request, res:Response, next:NextFunction) => {
  
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject,res))(req, res, next);
  })
    .then(() =>{ next() })
    .catch((err) => {
      if(res)return res.status(401).send({status:false,message:"UNAUTHOURIZED USER"});
      next(err)
    });
};

export const handleVisitorId = async (req: Request,res: Response,next: NextFunction)=>{
  try{
    let visitorId = req?.cookies?.visitor_id;
    if(!visitorId){
      visitorId = crypto.randomUUID();
      res.cookie('visitor_id',visitorId,{
        secure: true,
        httpOnly: true,
        sameSite: 'none',
        domain: '.astrix.live',
        maxAge: 365 * 24 * 60 * 60 * 1000
      })
    }
    req['visitorId'] = visitorId;
    next();
  }
  catch(error){
    return res.status(500).send({status:false,message:`Error while checking visitor identity: ${error?.message}`});
  }
}

export const authenticateUser = [
  validateRequestHeader(TokenHeaderSchema),
  authenticateUserJwt()
]

export const validateRequest =(schema: AnyZodObject) =>
async (req: Request, res: Response, next: NextFunction) => {
try {
const sanitizedValues = await schema.parseAsync({
  body: req.body,
  query: req.query,
  params: req.params,
});
req.body = sanitizedValues.body;
req.query = sanitizedValues.query;
req.params = sanitizedValues.params;
return next();
} catch (error) {
const validationErrors: { [key: string]: string } = {};

(error as ZodError).errors.forEach((errorMessage) => {
    const fieldName = errorMessage.path.join(".");
    validationErrors[fieldName] = errorMessage.message;
});

res.status(400).json({ errors: validationErrors });
}
};

const verifyPersonalInfoOtpValidator = z.object({
    otp: z.string({required_error: "otp is required"}).regex(/^\d{6}$/,{message:"Invalid OTP Format"}).transform(val=>sanitizeInputString(val)),
    method: z.enum(Object.values(OtpVerificationMethods) as [string,...string[]],{invalid_type_error:"please provide a valid otp verification method",required_error:"otp verification method is required"}),
    token: z.string({required_error: "token is required"}).regex(/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/,{message: "invalid token format"}).min(1),
});

export const verifyPersonalInfoOtp = () => async (req:Request, res:Response, next:NextFunction) => {
  try{
    const {token,otp,method} = req.headers as any;

    if(!Object.values(OtpVerificationMethods).includes(method)) throw new Error(`Invalid verification method`);
    const data = jwt.verify(token,envConfigs.jwt.secret) as any;
    if(!data.otp || !(data.email || data.phone) || !data.type || data.type !== TokenTypes.PERSONAL_INFO) throw new Error(`Invalid Token`);
    await AuthService.verifyOtp(data as decodedOtpToken,otp,method);
    next();
  }
  catch(error){
    res.status(400).json({status: false, message: error?.message});
  }
};

export const verifyPersonalInfoToken = [
  validateRequestHeader(verifyPersonalInfoOtpValidator),
  verifyPersonalInfoOtp()
]