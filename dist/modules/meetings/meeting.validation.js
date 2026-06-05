"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeetingSchema = void 0;
const zod_1 = require("zod");
exports.createMeetingSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    meetingDate: zod_1.z.string(),
    participants: zod_1.z.array(zod_1.z.string().email()),
    transcript: zod_1.z.array(zod_1.z.object({
        timestamp: zod_1.z.string(),
        speaker: zod_1.z.string(),
        text: zod_1.z.string(),
    })),
});
//# sourceMappingURL=meeting.validation.js.map