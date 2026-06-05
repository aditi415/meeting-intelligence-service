"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (traceId, data) => ({
    traceId,
    success: true,
    data
});
exports.successResponse = successResponse;
const errorResponse = (traceId, code, message) => ({
    traceId,
    success: false,
    error: {
        code,
        message
    }
});
exports.errorResponse = errorResponse;
//# sourceMappingURL=response.js.map