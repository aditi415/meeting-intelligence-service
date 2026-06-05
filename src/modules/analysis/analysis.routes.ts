import { Router } from "express";

import {
  analyzeMeetingController,
} from "./analysis.controller";

import {
  authMiddleware,
} from "../../middleware/auth.middleware";

const router = Router();

router.post(
  "/:id/analyze",
  authMiddleware,
  analyzeMeetingController
);

export default router;