"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceMiddleware = void 0;
const crypto_1 = require("crypto");
const traceMiddleware = (req, res, next) => {
    const traceId = req.headers["x-trace-id"]?.toString() ||
        (0, crypto_1.randomUUID)();
    res.locals.traceId = traceId;
    next();
};
exports.traceMiddleware = traceMiddleware;
//# sourceMappingURL=trace.middleware.js.map