import type { Config } from "drizzle-kit";
import { envConfigs } from "./src/config/envconfig";
// static host=process.env.host;
// static user=process.env.user;
// static password=process.env.password;
// static database=process.env.database;
// static dbport=process.env.dbport;
// static ssl=process.env.ssl;
if (envConfigs.env !== "dev") {
  // console.log(
  //   "dbUser : ",
  //   envConfigs.db.user,
  //   "password : ",
  //   envConfigs.db.password,
  //   "database : ",
  //   envConfigs.db.database,
  //   "host : ",
  //   envConfigs.db.host,
  // );
  console.log("dbUrl : ", envConfigs.db.url);
}
export default {
  schema: "./src/models/**/schema.ts",
  out: `./drizzle/${envConfigs.env}`,
  dialect: "postgresql",
  // driver:"pg",
  // driver:"pg",
  // dbCredentials: {
  //   host: "astrx-db.postgres.database.azure.com",
  //   user: "wstf",
  //   password: "sHQqsTy5Ver37dE",
  //   database: "astrix",
  //   port: envConfigs.db.port,
  //   ssl: envConfigs.db.ssl,
  // },
  dbCredentials: {
    // host: envConfigs.db.host,
    // user: envConfigs.db.user,
    // password: envConfigs.db.password,
    // database: envConfigs.db.database,
    // port: envConfigs.db.port,
    // ssl: envConfigs.db.ssl ,
    url: envConfigs.db.url,
  },
} satisfies Config;
