import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .regex(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/),
  password: Joi.string().required().regex(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z]{2,})(?=.*[A-Z])(?=.*[@#$%^&+!=]{2,})(?=.{8,13}).*$/).message("Password must be between 8 - 12 characters, have 2 lower cases and 2 symbols"),



});


