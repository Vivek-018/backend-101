import { pino } from "pino";
import { envConfigs } from "./envconfig";

export const logger = pino({
  level: "info",
  transport: {
    targets: [
      ...(envConfigs.isDev
        ? [
            {
              target: "pino-pretty",
              level: "info",
              options: {
                ignore: "pid,hostname",
                colorize: true,
                translateTime: true,
              },
            },
          ]
        : [
            {
              target: "pino/file",
              level: "info",
              options: {
                destination: "./logs/app.log",
                mkdir: true,
                minSize: 1000,
                sync: false,
                rotate: { maxFiles: 50, maxSize: "1m" },
              },
            },
            {
              target: "pino-pretty",
              level: "info",
              options: {
                ignore: "pid,hostname",
                colorize: true,
                translateTime: true,
              },
            },
          ]),
    ],
  },
});

export type Logger = typeof logger;
