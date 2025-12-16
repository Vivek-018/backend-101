import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import * as schema from "../models/schema";
import { envConfigs } from "./envconfig";
import { logger } from "./logger";


// export const client = new Client({
//   host: envConfigs.db.host,
//   user: envConfigs.db.user,
//   password: envConfigs.db.password,
//   database: envConfigs.db.database,
//   port: envConfigs.db.port,
//   ssl: envConfigs.db.ssl ,
// });

export const client = new Client({
  connectionString: envConfigs.db.url,
  ssl: {
    rejectUnauthorized: false, // REQUIRED for Neon
  },
});


client
  .connect()
  .then(() => {
  logger.info("PostGre client connected Successfully");
  })
  .catch((err) => {
    logger.error("Error COnnecting the client", err);
  });

const postgreDb = drizzle(client, { schema: { ...schema } });

export default postgreDb;
