import { Request, Response } from "express";

import { analyzeMeeting }
from "./analysis.service";

export const analyzeMeetingController =
  async (
    req: Request,
    res: Response
  ) => {

    const result =
      await analyzeMeeting(
        String(req.params.id)
      );

    return res.json({
      success: true,
      data: result,
    });
  };