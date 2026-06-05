"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMeetingsController = exports.getMeetingController = exports.createMeetingController = void 0;
const meeting_validation_1 = require("./meeting.validation");
const meeting_service_1 = require("./meeting.service");
const createMeetingController = async (req, res) => {
    const data = meeting_validation_1.createMeetingSchema.parse(req.body);
    const meeting = await (0, meeting_service_1.createMeeting)(req.user.userId, data);
    return res.status(201).json({
        success: true,
        data: meeting,
    });
};
exports.createMeetingController = createMeetingController;
const getMeetingController = async (req, res) => {
    const meetingId = String(req.params.id);
    const meeting = await (0, meeting_service_1.getMeetingById)(meetingId);
    return res.json({
        success: true,
        data: meeting,
    });
};
exports.getMeetingController = getMeetingController;
const listMeetingsController = async (req, res) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const result = await (0, meeting_service_1.listMeetings)(page, limit);
    return res.json({
        success: true,
        data: result,
    });
};
exports.listMeetingsController = listMeetingsController;
//# sourceMappingURL=meeting.controller.js.map