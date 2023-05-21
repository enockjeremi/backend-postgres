const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();

const createTypeSchema = Joi.object({
  name: name.required()
});

const updateTypeSchema = Joi.object({
  name: name
});

const getTypeSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTypeSchema, updateTypeSchema, getTypeSchema }
