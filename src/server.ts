import "reflect-metadata";
import "./typeorm";
import { errors } from "celebrate";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import "express-async-errors";

import Routes from "./routes";
import AppError from "./shared/errors/AppError";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", Routes);
app.use("/public", express.static(path.resolve(__dirname, "..", "public")));

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

export default app;
