import { parse } from 'pg-connection-string';
import { pgTable, pgEnum, pgSchema,serial,text,integer} from 'drizzle-orm/pg-core';
import postgreDb from "../config/sqlclients"

// Create the table
const createTable = async(tableName:string,obj:any)=> {
  try {
    return await pgTable(tableName,obj)
  } catch (error) {
    
  }
}

createTable("roles",{
  role_id: serial('id').primaryKey(),
  role_name: text('full_name'),
  role_credits: integer('role_credits'),
})

