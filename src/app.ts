import express from "express";
import cors from "cors";
import helmet from "helmet";

import analysisRoutes from "./modules/analysis/analysis.routes";
import meetingRoutes from "./modules/meetings/meeting.routes";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

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

export default app;