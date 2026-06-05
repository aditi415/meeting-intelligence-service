import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const traceId = res.locals.traceId;

  return res.status(500).json({
    traceId,
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: error.message
    }
  });
};