import { Request, Response } from "express";

import {
  createMeetingSchema,
} from "./meeting.validation";

import {
  createMeeting,
  getMeetingById,
  listMeetings,
} from "./meeting.service";

import { AuthRequest } from "../../middleware/auth.middleware";

export const createMeetingController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const data =
      createMeetingSchema.parse(
        req.body
      );

    const meeting =
      await createMeeting(
        req.user.userId,
        data
      );

    return res.status(201).json({
      success: true,
      data: meeting,
    });
  };

export const getMeetingController = async (
  req: Request,
  res: Response
  ) => {
  const meetingId = String(req.params.id);

  const meeting = await getMeetingById(meetingId);

  return res.json({
    success: true,
    data: meeting,
  });
};

export const listMeetingsController =
  async (
    req: Request,
    res: Response
  ) => {
    const page = Number(
      req.query.page || 1
    );

    const limit = Number(
      req.query.limit || 10
    );

    const result =
      await listMeetings(
        page,
        limit
      );

    return res.json({
      success: true,
      data: result,
    });
  };