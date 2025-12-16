import crypto from "crypto";
import {envConfigs} from "../config/envconfig";
import algosdk from "algosdk";
import { logger } from "../config/logger";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { TokenTypes, userLevel , UserActivities } from "../enums";
import moment from "moment";
import Constants from "../config/constants";

const levelToRank = {
    0 : userLevel.BRONZE,
    1 : userLevel.SILVER,
    2 : userLevel.GOLD,
    3 : userLevel.PLATINUM,
    4 : userLevel.DIAMOND
}

export const hashPassword = async(password: string): Promise<string> => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (error) {
        throw new Error(error);
    }

}

export const otpToken = (email:string,otp:number,type?: TokenTypes)=>{
    email = email.toLowerCase();
    const saltRounds = 10;
    const decryptedString = hashString(email,otp);
    const encryptedString = bcrypt.hashSync(decryptedString,saltRounds);
    const signObj = {
        otp:encryptedString,
        email,
        type: type ? type: TokenTypes.ACCESS
    }
    const expireTime = moment.duration(Constants.otpExpireDurationInMin, 'minutes').asMilliseconds();
    const token = jwt.sign(signObj,envConfigs.jwt.secret,{expiresIn:`${expireTime}`});
    return token;
}

export const hashString = (contact:string|number,otp:number|string)=>{
    return `ASTRIX_OTP: ${contact}:${otp}`;
}

export const verifyOtpHash = (hash:string,contact:string,otp:string)=>{
    const decryptedString = hashString(contact,otp);
    return bcrypt.compareSync(decryptedString,hash);
}

export const verifyJWT = (token:string)=>{
    return jwt.verify(token,envConfigs.jwt.secret);
}


export const encrypt = (text:string) => {
    const iv = crypto.randomBytes(16);
    const key = Buffer.alloc(32);
    Buffer.from(envConfigs.jwt.secret).copy(key,0,0,Math.min(32,envConfigs.jwt.secret.length));
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { encryptedData: encrypted,iv: iv.toString('hex') };
  }
  
export const decrypt = (encryptedData: string, ivHex: string) =>{
    const key = Buffer.alloc(32);
    Buffer.from(envConfigs.jwt.secret).copy(key,0,0,Math.min(32,envConfigs.jwt.secret.length));
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(ivHex, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

export const getEncryptedAndIvString = (text: string)=>{
    if(!text) return null;
    const encrypted = encrypt(text);
    return `${encrypted.encryptedData},${encrypted.iv}`
}

export const getDecryptedStringFromEncryptedIv = (text: string)=>{
    if(!text) return null;
    const encryptedIv = text.split(",");
    if(encryptedIv.length!==2) throw new Error('invalid encryptedIv string');
    return decrypt(encryptedIv[0],encryptedIv[1]);
}

export const isValidEmail = (text:string)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(text);
}
  
export const generateObjJWT = (value:Object)=>{
    return jwt.sign(value,envConfigs.jwt.secret,{expiresIn:Constants.otpExpireDurationInMin*60});
}


