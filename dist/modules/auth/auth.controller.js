"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const auth_service_1 = require("./auth.service");
const auth_validation_1 = require("./auth.validation");
const register = async (req, res) => {
    const data = auth_validation_1.registerSchema.parse(req.body);
    const user = await (0, auth_service_1.registerUser)(data.email, data.password);
    return res.status(201).json({
        success: true,
        data: user,
    });
};
exports.register = register;
const login = async (req, res) => {
    const data = auth_validation_1.loginSchema.parse(req.body);
    const result = await (0, auth_service_1.loginUser)(data.email, data.password);
    return res.status(200).json({
        success: true,
        data: result,
    });
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map