import app from "./app";
import { env } from "./config/env";
import express from "express";

const app = express();

app.listen(env.PORT, () => {
  console.log(
    `Server running on port ${env.PORT}`
  );
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Meeting Intelligence Service API is running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});
