import express from "express";
import cors from "cors";
import helmet from "helmet";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import analysisRoutes from "./modules/analysis/analysis.routes";
import meetingRoutes from "./modules/meetings/meeting.routes";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get("/health", (_, res) => {
  res.json({
    status: "UP",
  });
});

app.use(
    "/api/meetings",
    meetingRoutes
  );

app.use(
    "/api/analysis",
    analysisRoutes
  );

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Meeting Intelligence Service API is running"
  });
});

export default app;
