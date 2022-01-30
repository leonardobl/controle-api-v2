import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import jwtConfigs from "../configs/auth";
import AppError from "../errors/AppError";

interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new AppError("Token is missing");

  const token = authHeader.split(" ")[1];

  try {
    const decoderToken = verify(token, jwtConfigs.jwt.secret);

    const { exp, sub, iat } = decoderToken as IToken;

    req.user = { id: sub };

    return next();
  } catch {
    throw new AppError("Invalid token");
  }
}
