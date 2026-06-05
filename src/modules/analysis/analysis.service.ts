import { prisma } from "../../config/prisma";

import { analyzeTranscript } from "../../services/gemini.service";

export const analyzeMeeting = async (
  meetingId: string
) => {

  const meeting =
    await prisma.meeting.findUnique({
      where: {
        id: meetingId,
      },

      include: {
        transcripts: true,
      },
    });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  const transcriptText =
    meeting.transcripts
      .map(
        (t) =>
          `[${t.timestamp}] ${t.speaker}: ${t.text}`
      )
      .join("\n");

  const aiResponse =
    await analyzeTranscript(
      transcriptText
    );

  return JSON.parse(aiResponse);
};