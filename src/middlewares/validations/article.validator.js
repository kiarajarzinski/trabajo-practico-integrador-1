import { body, param } from "express-validator";
import { Article } from "../../models/article.model.js";

export const validateArticleIdInParams = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("El id del artículo debe ser un número entero y positivo.")
    .custom(async (value) => {
      const article = await Article.findByPk(value);
      if (!article) {
        throw new Error("El artículo con el id no existe.");
      }
    }),
];

export const createArticleValidator = [
  body("title")
    .notEmpty()
    .withMessage("El título del artículo es obligatorio.")
    .isLength({ min: 3, max: 200 })
    .withMessage("El título debe tener entre 3 y 200 carácteres.")
    .trim(),

  body("content")
    .notEmpty()
    .withMessage("El contenido del artículo es obligatorio.")
    .isLength({ min: 50 })
    .withMessage("El contenido debe tener al menos 50 carácteres.")
    .trim(),

  body("excerpt")
    .optional()
    .isString()
    .withMessage("El resumen debe ser texto.")
    .isLength({ max: 500 })
    .withMessage("El resumen no debe exceder los 500 carácteres.")
    .trim(),

  body("status")
    .optional()
    .isIn(["published", "archived"])
    .withMessage('El estado debe ser "published" o "archived".'),
];

export const updateArticleValidator = [
  body("title")
    .optional()
    .isLength({ min: 3, max: 200 })
    .withMessage("El título debe tener entre 3 y 200 carácteres.")
    .trim(),

  body("content")
    .optional()
    .isLength({ min: 50 })
    .withMessage("El contenido debe tener al menos 50 carácteres.")
    .trim(),

  body("excerpt")
    .optional()
    .isString()
    .withMessage("El resumen debe ser texto.")
    .isLength({ max: 500 })
    .withMessage("El resumen no debe exceder los 500 carácteres.") 
    .trim(),

  body("status")
    .optional()
    .isIn(["published", "archived"])
    .withMessage('El estado debe ser "published" o "archived".'),
];