import Joi from "joi";

const create = Joi.object({
  img: Joi.string().required(),
  type: Joi.string().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string(),
  location: Joi.string().required(),
  spot: Joi.string().required(),
});

export default {create};