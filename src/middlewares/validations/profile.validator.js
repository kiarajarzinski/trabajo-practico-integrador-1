import { body, param } from "express-validator";
import { Profile } from "../../models/profile.model.js";

export const createProfileValidator = [
  body("first_name")
    .notEmpty()
    .withMessage("El nombre es obligatorio.")
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 carácteres.")
    .trim(),
  body("last_name")
    .notEmpty()
    .withMessage("El apellido es obligatorio.")
    .isString()
    .withMessage("El apellido debe ser un texto.")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 carácteres.")
    .trim(),
  body("biography")
    .optional()
    .isString()
    .withMessage("La biografía debe ser un texto.")
    .isLength({ max: 500 })
    .withMessage("La biografía no debe exceder los 500 carácteres.")
    .trim(),

  body("avatar_url")
    .optional()
    .isURL()
    .withMessage("Formato de avatar no válido."),

  body("birth_date")
    .optional()
    .isISO8601()
    .withMessage(
      "Fecha de nacimiento no válida."
    )
    .toDate(),
];

export const updateProfileValidator = [
  body("first_name")
    .optional()
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 carácteres.")
    .trim(),

  body("last_name")
    .optional()
    .isString()
    .withMessage("El apellido debe ser un texto.")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 carácteres.")
    .trim(),

  body("biography")
    .optional()
    .isString()
    .withMessage("La biografía debe ser un texto.")
    .isLength({ max: 500 })
    .withMessage("La biografía no debe exceder los 500 carácteres.")
    .trim(),

  body("avatar_url")
    .optional()
    .isURL()
    .withMessage("Formato de avatar no válido."),

  body("birth_date")
    .optional()
    .isISO8601()
    .withMessage("Fecha de nacimiento no válida.")
    .toDate(),

  body("user_id")
    .not()
    .exists()
    .withMessage("No se puede cambiar el usuario asociado a un perfil."),
];