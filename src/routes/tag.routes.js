import { Router } from "express";
import { createTag, getAllTags, getTagById, updateTag, deleteTag } from "../controllers/tag.controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { authAdminMiddleware } from "../middlewares/authAdmin.js";
import { validateTagIdInParams, createTagValidator, updateTagValidator } from "../middlewares/validations/tag.validator.js";
import { validator } from "../middlewares/validator.js";

export const tagRouter = Router();

tagRouter.post("/tags", authMiddleware, authAdminMiddleware, createTag, createTagValidator, validator);

tagRouter.get("/tags", authMiddleware, getAllTags);

tagRouter.get( "/tags/:id", authMiddleware, authAdminMiddleware, getTagById, validateTagIdInParams, validator);

tagRouter.put( "/tags/:id", authMiddleware, authAdminMiddleware, updateTag, validateTagIdInParams, updateTagValidator);

tagRouter.delete( "/tags/:id", authMiddleware, authAdminMiddleware, deleteTag, validateTagIdInParams, validator);