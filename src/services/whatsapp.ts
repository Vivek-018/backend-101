import bcrypt from "bcryptjs"
import { generateObjJWT, hashString } from "../helpers/common";
import { envConfigs } from "../config/envconfig";
import Constants from "../config/constants";
import jwt from "jsonwebtoken";

export default class WhatsappService{
    static generateWhatsAppOtp = (phone_number:string):string=>{
        let phone = phone_number ? phone_number.charAt(0)==="+" ? phone_number.slice(1) : phone_number : "9999999999";
        let seed = Number(phone);
        seed -= Math.floor(Math.random() * 33300) + (Date.now() % 100);
        const otp = (Math.abs(Math.floor(Math.random() * seed) % (10 ** Constants.otplength)) + 10 ** Constants.otplength).toString().slice(-Constants.otplength);
        return otp;
    }
    
    static otpHash = (phone_number:string | number,otp:string)=>{
        const saltRounds = 10;
        const decryptedString = hashString(phone_number,otp);
        return bcrypt.hashSync(decryptedString,saltRounds);
    }
    
    static verifyHash = (hash:string,phone_number:string|number,otp:string)=>{
        const decryptedString = hashString(phone_number,otp);
        return bcrypt.compareSync(decryptedString,hash);
    }
    
    static generateJWT = (value:Object)=>{
        return generateObjJWT(value);
    }
    
    static verifyOtpJWT = (token:string)=>{
        const payload:any = jwt.verify(token,envConfigs.jwt.secret);
        const currentTime = Math.floor(Date.now() / 1000);
        if(!(payload.iat + (Constants.otpExpireDurationInMin * 60) > currentTime)){
            return "";
        }
        return payload.hash;
    }
}