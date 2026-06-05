import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../../config/prisma";
import { env } from "../../config/env";

export const registerUser = async (
  email: string,
  password: string
) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });

  return {
    id: user.id,
    email: user.email,
  };
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const validPassword = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
  };
};