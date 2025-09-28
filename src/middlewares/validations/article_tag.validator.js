import { body, param } from "express-validator";
import { Article } from "../../models/article.model.js";
import { Tag } from "../../models/tag.model.js";
import { ArticleTag } from "../../models/article_tag.model.js";

export const validateArticleTagId = [
  param("articleTagId")
    .isInt({ min: 1 })
    .withMessage(
      "El id del artículo-etiqueta debe ser un número entero y positivo."
    )
    .custom(async (value) => {
      const articleTag = await ArticleTag.findByPk(value);
      if (!articleTag) {
        throw new Error("No se econtró la relación de artículo-etiqueta.");
      }
    }),
];
export const addTagToArticleValidator = [
  body("article_id")
    .isInt({ min: 1 })
    .withMessage("El id del artículo debe ser un número entero y positivo")
    .custom(async (value) => {
      const article = await Article.findByPk(value);
      if (!article) {
        throw new Error("El artículo con ese id no existe.");
      }
    }),

  body("tag_id")
    .isInt({ min: 1 })
    .withMessage("El id de la etiqueta debe ser un número entero y positivo.")
    .custom(async (value) => {
      const tag = await Tag.findByPk(value);
      if (!tag) {
        throw new Error("La etiqueta con ese id no existe.");
      }
    }),
];

export const removeTagFromArticleValidator = [
  param("articleTagId")
    .isInt({ min: 1 })
    .withMessage("El id de la relación debe ser un número entero y positivo."),
];