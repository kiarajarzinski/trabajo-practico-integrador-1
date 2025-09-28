import { Router } from "express";
import { addTagToArticle, removeTagFromArticle } from "../controllers/article_tag.controller.js";
import { authAdminMiddleware } from "../middlewares/authAdmin.js";
import { ownerMiddleware } from "../middlewares/authOwner.js";
import { authMiddleware } from "../middlewares/auth.js";
import { validateArticleTagId, addTagToArticleValidator, removeTagFromArticleValidator } from "../middlewares/validations/article_tag.validator.js";
import { validator } from "../middlewares/validator.js";

export const articleTagRouter = Router();

articleTagRouter.post( "/articles-tags", authMiddleware, ownerMiddleware, addTagToArticle,  addTagToArticleValidator, validator);
articleTagRouter.delete( "/articles-tags/:articleTagId", authMiddleware, ownerMiddleware, removeTagFromArticle,  validateArticleTagId, removeTagFromArticleValidator, validator);