import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controllers.js";
import { authAdminMiddleware } from "../middlewares/authAdmin.js";
import { authMiddleware } from "../middlewares/auth.js";

export const userRouter = Router();

userRouter.get("/users", authMiddleware, authAdminMiddleware, getAllUsers);

userRouter.get("/users/:id", authMiddleware,  getUserById);

userRouter.put( "/users/:id", authMiddleware, authAdminMiddleware, updateUser);

userRouter.delete( "/users/:id", authMiddleware, authAdminMiddleware, deleteUser);
