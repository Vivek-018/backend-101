import jwt from "jsonwebtoken";
import moment from "moment";
import { envConfigs } from "../config/envconfig";
import { OtpVerificationMethods, TokenTypes } from "../enums";
import { User } from "../models/schema";
import { verifyOtpHash } from "../helpers/common";
import services from ".";
import WhatsappService from "./whatsapp";
import { decodedEmailOtp, decodedOtpToken } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export default class AuthService {
  static generateAuthTokens = (user: User | {userId:number,username:string,isOnboarded:boolean}): string => {
    const accessTokenExpires = moment().add(
      envConfigs.jwt.accessExpirationMinutes,
      "minutes"
    );
    const accessToken = jwt.sign(JSON.stringify({
      userId: user.userId,
      userName: user?.username.toLowerCase(),
      isOnboarded: user?.isOnboarded ?? false,
      type: TokenTypes.ACCESS, // Include the token type
      exp: accessTokenExpires.unix() // Set expiration time in UNIX timestamp format
    }), envConfigs.jwt.secret);
  

    // const refreshTokenExpires = moment().add(refreshExpirationDays, 'days');
    // const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH);
    // await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH);

    return accessToken;
  };

  static generateUniqueUsername = () => {
    return `astrix_${uuidv4().replace(/-/g,"_")}`;
  }

  static generateLoginToken = (otp:number,email:string)=>{
    try {
      const accessTokenExpires = moment().add(
        envConfigs.jwt.accessExpirationMinutes,
        "minutes"
      );
      const accessToken = jwt.sign(JSON.stringify({
        otp: otp,
        email: email,
        type: TokenTypes.ACCESS, // Include the token type
        exp: accessTokenExpires.unix() // Set expiration time in UNIX timestamp format
      }), envConfigs.jwt.secret);
    
  
      // const refreshTokenExpires = moment().add(refreshExpirationDays, 'days');
      // const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH);
      // await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH);
  
      return accessToken;
    } catch (error) {
      throw new Error(error);
    }
  }
  static generateToken = (
    userId: string,
    expires: any,
    type: string,
    secret = envConfigs.jwt.secret
  ): string => {
    const payload = {
      sub: userId,
      iat: moment().unix(),
      exp: expires.unix(),
      type,
    };
    return jwt.sign(payload, secret);
  };

  static formatDate = (date: string): any => {
    try {
      return moment(date).utc().format("MMM DD YYYY, HH:mm [UTC]");
    } catch (error) {
      throw new Error(error);
    }
  };

  static verifyOtp = async (decodedTokenData:decodedOtpToken,otp:string,method:OtpVerificationMethods):Promise<User | null>=>{
    try{
      switch(method){
        case OtpVerificationMethods.EMAIL:
          if(!verifyOtpHash(decodedTokenData["otp"],decodedTokenData["email"],otp)){
            throw new Error("invalid otp provided");
          }
          return await services.DbService.getUserByEmail(decodedTokenData["email"]);
        case OtpVerificationMethods.WHATSAPP:
          if(!WhatsappService.verifyHash(decodedTokenData['otp'],decodedTokenData["phone"],otp)){
            throw new Error("invalid otp provided.");
          }
          return await services.DbService.getUserByPhone(decodedTokenData["phone"]);
        default:
          throw new Error("Invalid type: otp verification")
      }
    }
    catch(error){
      throw new Error(`Error while verifying otp: ${error.message}`);
    }
  }

  // static refreshAuth = async (refreshToken) => {
  //   try {
  //     const refreshTokenDoc = await TokenService.verifyToken(refreshToken, tokenTypes.REFRESH);
  //     const user = await UserService.getUserById(refreshTokenDoc.user);
  //     if (!user) {
  //       throw new Error();
  //     }
  //     await refreshTokenDoc.remove();
  //     return TokenService.generateAuthTokens(user);
  //   } catch (error) {
  //     throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  //   }
  // };
}
