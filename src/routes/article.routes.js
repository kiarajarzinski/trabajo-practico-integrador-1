import { Router } from "express";
import { createArticle, deleteArticle, getArticleById, getPublishedArticles, getUserArticleById, getUserArticles, updateArticle, } from "../controllers/article.controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { ownerMiddleware } from "../middlewares/authOwner.js";
import { updateArticleValidator, createArticleValidator, validateArticleIdInParams } from "../middlewares/validations/article.validator.js";
import { validator } from "../middlewares/validator.js";

export const articleRouter = Router();

articleRouter.post( "/articles", authMiddleware, createArticle, createArticleValidator, validator);

articleRouter.get("/articles", authMiddleware, getPublishedArticles);

articleRouter.get("/articles/user", authMiddleware, getUserArticles);

articleRouter.get("/articles/:id", authMiddleware, getArticleById, validateArticleIdInParams);

articleRouter.get( "/articles/user/:id", authMiddleware, getUserArticleById,  validateArticleIdInParams, validator);

articleRouter.put( "/articles/:id", authMiddleware, ownerMiddleware, updateArticle, validateArticleIdInParams, updateArticleValidator, validator);

articleRouter.delete("/articles/:id", authMiddleware, ownerMiddleware, deleteArticle, validateArticleIdInParams, validator);