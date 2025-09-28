import { Router } from "express";
import { login, logout, profile, register, updateProfileAuthenticate } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { createUserValidator } from "../middlewares/validations/user.validator.js";
import { validator } from "../middlewares/validator.js";
import { createProfileValidator, updateProfileValidator } from "../middlewares/validations/profile.validator.js";

export const authRouter = Router();

authRouter.post("/auth/logout", authMiddleware, logout);
authRouter.get("/auth/profile", authMiddleware, profile);
authRouter.put("/auth/profile", authMiddleware, updateProfileAuthenticate, updateProfileValidator, validator);
authRouter.post("/auth/register", register, createProfileValidator, createUserValidator, validator);
authRouter.post("/auth/login", login);