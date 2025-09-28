import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
import { authAdminMiddleware } from "../middlewares/authAdmin.js";
import { authMiddleware } from "../middlewares/auth.js";
import { validator } from "../middlewares/validator.js";
import { updateUserValidator, validateUserIdInParams } from "../middlewares/validations/user.validator.js";

export const userRouter = Router();

userRouter.get("/users", authMiddleware, authAdminMiddleware, getAllUsers);

userRouter.get("/users/:id", authMiddleware, authAdminMiddleware, getUserById);

userRouter.put( "/users/:id", authMiddleware, authAdminMiddleware, updateUser, validateUserIdInParams, updateUserValidator, validator);

userRouter.delete( "/users/:id", authMiddleware, authAdminMiddleware, deleteUser, validateUserIdInParams, validator);
