import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { TokenTypes } from '../enums';
import { envConfigs } from './envconfig';
import DbService from '../services/db';



const jwtOptions = {
  secretOrKey: envConfigs.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== TokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    if(!payload && Object.keys(payload).length <=3 && (!payload.userId && typeof parseInt(payload.userId) !== "number") && (!payload.userName && typeof payload.userName !== "string") && !payload.isOnboarded ) throw new Error("Invalid Token");
    // check user by id
    const user = await DbService.getActiveUserDetailsById(payload.userId);
    const data = {
      userId: user.userId,
      userName: user.username,
      isOnboarded: user.isOnboarded,
      role: user.role,
      type: payload.type
    };
    done(null, data);
  } catch (error) {
    done(error, false);
  }
};

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);