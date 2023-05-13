import Joi from "joi";


export const TaskSchema = Joi.object({
  id: Joi.string(),

  title: Joi.string().trim().required().min(4).max(15),

  description: Joi.string().required().min(4).max(399),

  status: Joi.string()
    .trim()
    .required(),


});