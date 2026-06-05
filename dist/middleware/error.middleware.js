"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, req, res, next) => {
    const traceId = res.locals.traceId;
    return res.status(500).json({
        traceId,
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: error.message
        }
    });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map