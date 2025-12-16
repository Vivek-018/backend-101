import express from "express";
import cors from "cors";
import router from "./routes";
import { logger } from "./config/logger";
import { pinoHttp } from "pino-http";
import { envConfigs } from "./config/envconfig";
import passport from "passport";
import { jwtStrategy } from "./config/passport";
import { handleVisitorId } from "./middlewares";
import cookieParser from 'cookie-parser';

const app = express();

if (envConfigs.isDev) {
  app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
} else {
  app.use(cors());
  app.use(pinoHttp({ logger }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy',true);
app.use(cookieParser());

passport.use('jwt', jwtStrategy);
app.use(handleVisitorId);
app.use("/", router);

const server = app.listen(envConfigs.port, () => {
  logger.info(
    `Astrix marketing server is running on port ${envConfigs.port}`
  );
});
