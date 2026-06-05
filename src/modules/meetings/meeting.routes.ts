import { Router } from "express";

import {
  createMeetingController,
  getMeetingController,
  listMeetingsController,
} from "./meeting.controller";

import {
  authMiddleware,
} from "../../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  createMeetingController
);

router.get(
  "/",
  authMiddleware,
  listMeetingsController
);

router.get(
  "/:id",
  authMiddleware,
  getMeetingController
);

export default router;