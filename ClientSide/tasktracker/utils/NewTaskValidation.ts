import Joi from "joi";

export const newTaskSchema = Joi.object({
  title: Joi.string().required().trim().min(4).max(50),
  description: Joi.string().required().trim().min(6).max(400),
  status: Joi.string().required(),
  image:Joi.any()
});
