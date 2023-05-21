const Joi = require('joi');

const id = Joi.number().integer();
const ppu = Joi.string().min(6).max(6);
const carBrand = Joi.string();
const carModel = Joi.string();
const carYear = Joi.string();
const kmInit = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createPPUSchema = Joi.object({
  ppu: ppu.required(),
  carBrand: carBrand.required(),
  carModel: carModel.required(),
  carYear: carYear.required(),
  kmInit: kmInit.required(),
});

const updatePPUSchema = Joi.object({
  carBrand: carBrand,
  carModel: carModel,
  carYear: carYear,
  kmInit: kmInit,
});

const getPPUSchema = Joi.object({
  id: id.required(),
});
const queryPPUSchema = Joi.object({
  limit,
  offset
});

module.exports = { createPPUSchema, updatePPUSchema, getPPUSchema, queryPPUSchema }
