import * as dotenv from "dotenv";
dotenv.config();
import { z } from "zod";

// const envVarsSchema = z.object({
//   MODE: z.union([z.literal("prod"), z.literal("dev"), z.literal("staging")]),
//   PORT: z
//     .string()
//     .default("80")
//     .transform((str) => parseInt(str, 10)),
//   // JWT secret key

//   JWT_SECRET: z.string(),
//   // minutes after which access tokens expire
//   JWT_ACCESS_EXPIRATION_MINUTES: z
//     .string()
//     .default("30")
//     .transform((str) => parseInt(str, 10)),
//   // days after which refresh tokens expire
//   JWT_REFRESH_EXPIRATION_DAYS: z
//     .string()
//     .default("30")
//     .transform((str) => parseInt(str, 10)),
//   //db
//   HOST: z.string(),
//   DBUSER: z.string(),
//   PASSWORD: z.string(),
//   DATABASE: z.string(),
//   STAGE_DB: z.string(),
//   DBPORT: z
//     .string()
//     .default("5432")
//     .transform((str) => parseInt(str, 10)),
//   SSL: z.enum(["true", "false"]).transform((str) => str === "true"),

//   PROD_HOST: z.string(),
//   PROD_DBUSER: z.string(),
//   PROD_PASSWORD: z.string(),
//   PROD_DATABASE: z.string(),

//   //Google Vision API
//   GOOGLE_VISION_API_KEY: z.string(),
// });

const envVarsSchema = z.object({
  MODE: z.union([
    z.literal("dev"),
    z.literal("staging"),
    z.literal("prod"),
  ]),
  JWT_SECRET: z.string(),
  JWT_ACCESS_EXPIRATION_MINUTES: z
    .string()
    .default("30")
    .transform((str) => parseInt(str, 10)),
  JWT_REFRESH_EXPIRATION_DAYS: z
    .string()
    .default("30")
    .transform((str) => parseInt(str, 10)),
  PORT: z
    .string()
    .default("80")
    .transform((str) => parseInt(str, 10)),
  DEV_DATABASE_URL: z.string().url(),
  BETA_DATABASE_URL: z.string().url(),
  PROD_DATABASE_URL: z.string().url(),
  GOOGLE_VISION_API_KEY: z.string(),
});

export const envVars = envVarsSchema.parse(process.env);

const isDev = envVars.MODE === "dev";
const isProd = envVars.MODE === "prod";
const isStaging = envVars.MODE === "staging";

export const envConfigs = {
  env: envVars.MODE,
  isDev,
  isProd,
  isStaging,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  },
  // db: {
  //   host: isProd ? envVars.PROD_HOST : envVars.HOST,
  //   user: isProd ? envVars.PROD_DBUSER : envVars.DBUSER,
  //   password: isProd ? envVars.PROD_PASSWORD : envVars.PASSWORD,
  //   database: isProd
  //     ? envVars.PROD_DATABASE
  //     : isStaging
  //     ? envVars.STAGE_DB
  //     : envVars.DATABASE,
  //   port: envVars.DBPORT,
  //   ssl: envVars.SSL,
  // },
  db: {
    url: isProd
      ? envVars.PROD_DATABASE_URL
      : isStaging
      ? envVars.BETA_DATABASE_URL
      : envVars.DEV_DATABASE_URL,
  },

  googleVisionApi: {
    key: envVars.GOOGLE_VISION_API_KEY
  }
  
};
