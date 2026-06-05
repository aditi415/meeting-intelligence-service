import { Request, Response } from "express";

import {
  registerUser,
  loginUser,
} from "./auth.service";

import {
  registerSchema,
  loginSchema,
} from "./auth.validation";

export const register = async (
  req: Request,
  res: Response
) => {
  const data = registerSchema.parse(req.body);

  const user = await registerUser(
    data.email,
    data.password
  );

  return res.status(201).json({
    success: true,
    data: user,
  });
};

export const login = async (
  req: Request,
  res: Response
) => {
  const data = loginSchema.parse(req.body);

  const result = await loginUser(
    data.email,
    data.password
  );

  return res.status(200).json({
    success: true,
    data: result,
  });
};