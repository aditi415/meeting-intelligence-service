"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../config/prisma");
const env_1 = require("../../config/env");
const registerUser = async (email, password) => {
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const passwordHash = await bcryptjs_1.default.hash(password, 10);
    const user = await prisma_1.prisma.user.create({
        data: {
            email,
            passwordHash,
        },
    });
    return {
        id: user.id,
        email: user.email,
    };
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const validPassword = await bcryptjs_1.default.compare(password, user.passwordHash);
    if (!validPassword) {
        throw new Error("Invalid email or password");
    }
    const token = jsonwebtoken_1.default.sign({
        userId: user.id,
        email: user.email,
    }, env_1.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return {
        token,
    };
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map