import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";

export const traceMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const traceId =
    req.headers["x-trace-id"]?.toString() ||
    randomUUID();

  res.locals.traceId = traceId;

  next();
};