import postgreDb, { client } from "../config/sqlclients";
import { and, eq} from "drizzle-orm";
import { User, users } from "../models/schema";
import { userAccountStatus } from "../enums";

export default class DbService {
    static getActiveUserDetailsById = async (userId:number):Promise<{username:string,userId:number,isOnboarded:boolean,role:string,email:string}> =>{
    try{
      let fetchedUser = await postgreDb.select({
        username: users.username,
        userId: users.userId,
        isOnboarded: users.isOnboarded,
        role: users.role,
        email: users.email
      })
      .from(users).where(and(eq(users.userId, userId),eq(users.accountStatus,userAccountStatus.ACTIVE)));
      if(!fetchedUser.length) throw new Error('user not found');
      return fetchedUser[0];
    }
    catch(error){
      throw new Error(error.message);
    }
  }

    static getUserByEmail = async (email: string): Promise<User> => {
    try {
      let fetchedUser = await postgreDb.select().from(users).where(eq(users.email, email.toLowerCase()));
      return fetchedUser[0];
    } catch (error) {
      return null;
    }
  };

  static getUserByPhone = async (phone: string): Promise<User> => {
    try {
      let fetchedUser = await postgreDb.select().from(users).where(eq(users.phone, phone));
      return fetchedUser[0];
    } catch (error) {
      return null;
    }
  };
}
