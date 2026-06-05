import { prisma } from "../../config/prisma";

interface TranscriptInput {
  timestamp: string;
  speaker: string;
  text: string;
}

export const createMeeting = async (
  userId: string,
  data: {
    title: string;
    meetingDate: string;
    participants: string[];
    transcript: TranscriptInput[];
  }
) => {
  return prisma.meeting.create({
    data: {
      title: data.title,

      meetingDate: new Date(
        data.meetingDate
      ),

      createdById: userId,

      participants: {
        create: data.participants.map(
          (email) => ({
            email,
          })
        ),
      },

      transcripts: {
        create: data.transcript,
      },
    },

    include: {
      participants: true,
      transcripts: true,
    },
  });
};

export const getMeetingById = async (
  id: string
) => {
  return prisma.meeting.findUnique({
    where: { id },

    include: {
      participants: true,
      transcripts: true,
      actionItems: true,
      analysis: true,
    },
  });
};

export const listMeetings = async (
  page: number,
  limit: number
) => {
  const skip =
    (page - 1) * limit;

  const meetings =
    await prisma.meeting.findMany({
      skip,
      take: limit,

      orderBy: {
        createdAt: "desc",
      },
    });

  const total =
    await prisma.meeting.count();

  return {
    meetings,
    total,
    page,
    limit,
  };
};