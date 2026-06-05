import { z } from "zod";

export const createMeetingSchema = z.object({
  title: z.string().min(1),

  meetingDate: z.string(),

  participants: z.array(
    z.string().email()
  ),

  transcript: z.array(
    z.object({
      timestamp: z.string(),
      speaker: z.string(),
      text: z.string(),
    })
  ),
});