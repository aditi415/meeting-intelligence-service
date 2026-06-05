"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meeting_controller_1 = require("./meeting.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.post("/", auth_middleware_1.authMiddleware, meeting_controller_1.createMeetingController);
router.get("/", auth_middleware_1.authMiddleware, meeting_controller_1.listMeetingsController);
router.get("/:id", auth_middleware_1.authMiddleware, meeting_controller_1.getMeetingController);
exports.default = router;
//# sourceMappingURL=meeting.routes.js.map