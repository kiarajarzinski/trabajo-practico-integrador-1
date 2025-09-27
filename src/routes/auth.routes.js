import { Router } from "express";
import { login, logout, profile, register, updateProfileAuthenticate } from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.js";

export const authRouter = Router();

authRouter.post("/auth/logout", authMiddleware, logout);
authRouter.get("/auth/profile", authMiddleware, profile);
authRouter.put("/auth/profile", authMiddleware, updateProfileAuthenticate);
authRouter.post("/auth/register", register);
authRouter.post("/auth/login", login);