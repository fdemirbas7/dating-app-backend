const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().max(16).min(2).required(),
  surname: Joi.string().max(16).min(2).required(),
  username: Joi.string().max(255).min(3).alphanum().required(),
  password: Joi.string().max(255).min(6).required(),
  age: Joi.number().required(),
  bio: Joi.string().max(50).min(8),
  sex: Joi.string().max(6).min(1),
  hobbies: Joi.array(),
  likedGenres: Joi.array(),
});

module.exports = userValidationSchema;
