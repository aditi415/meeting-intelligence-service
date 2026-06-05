"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMeetings = exports.getMeetingById = exports.createMeeting = void 0;
const prisma_1 = require("../../config/prisma");
const createMeeting = async (userId, data) => {
    return prisma_1.prisma.meeting.create({
        data: {
            title: data.title,
            meetingDate: new Date(data.meetingDate),
            createdById: userId,
            participants: {
                create: data.participants.map((email) => ({
                    email,
                })),
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
exports.createMeeting = createMeeting;
const getMeetingById = async (id) => {
    return prisma_1.prisma.meeting.findUnique({
        where: { id },
        include: {
            participants: true,
            transcripts: true,
            actionItems: true,
            analysis: true,
        },
    });
};
exports.getMeetingById = getMeetingById;
const listMeetings = async (page, limit) => {
    const skip = (page - 1) * limit;
    const meetings = await prisma_1.prisma.meeting.findMany({
        skip,
        take: limit,
        orderBy: {
            createdAt: "desc",
        },
    });
    const total = await prisma_1.prisma.meeting.count();
    return {
        meetings,
        total,
        page,
        limit,
    };
};
exports.listMeetings = listMeetings;
//# sourceMappingURL=meeting.service.js.map