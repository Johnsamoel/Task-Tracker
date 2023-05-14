import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .regex(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/),
    password: Joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/).message("Password expresion requires one lower case letter, one upper case letter, one digit, 6-13 length, and no spaces"),



});


