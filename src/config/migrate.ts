import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import postgreDb, { client } from "./sqlclients";
import { envConfigs } from "./envconfig";
import { logger } from "./logger";

async function migrateData() {
  console.log("envConfigs.env", envConfigs.env);
  // This will run migrations on the database, skipping the ones already applied
  await migrate(postgreDb, { migrationsFolder: `./drizzle/${envConfigs.env}` });
  // Don't forget to close the connection, otherwise the script will hang
  logger.info("Migrations Done");
  await client.end();
}

migrateData().catch((err) => {
  logger.error(err);
  process.exit(0);
});
