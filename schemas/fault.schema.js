const Joi = require('joi');

const id = Joi.number().integer();
const fault = Joi.string();
const faultSymptoms = Joi.string();
const faultDiagnosis = Joi.string();
const faultSolution = Joi.string();
const kmCurrent = Joi.number().integer();
const ppuId = Joi.number().integer();
const typeId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const type = Joi.number().integer();


const createFaultSchema = Joi.object({
  fault: fault.required(),
  faultSymptoms: faultSymptoms.required(),
  faultDiagnosis: faultDiagnosis.required(),
  faultSolution: faultSolution.required(),
  kmCurrent: kmCurrent.required(),
  ppuId: ppuId.required(),
  typeId: typeId.required(),
});

const updateFaultSchema = Joi.object({
  fault: fault,
  faultSymptoms: faultSymptoms,
  faultDiagnosis: faultDiagnosis,
  faultSolution: faultSolution,
  kmCurrent: kmCurrent,
  ppuId: ppuId.required(),
  typeId: typeId.required(),
});

const getFaultSchema = Joi.object({
  id: id.required(),
});
const queryFaultSchema = Joi.object({
  limit,
  offset,
  type
});

module.exports = { createFaultSchema, updateFaultSchema, getFaultSchema, queryFaultSchema }
