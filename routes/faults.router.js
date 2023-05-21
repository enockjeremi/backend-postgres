const express = require('express');

const FaultsService = require('./../services/faults.services')
const validatorHandler = require('../middlewares/validator.handler');
const { createFaultSchema, updateFaultSchema, getFaultSchema, queryFaultSchema } = require('./../schemas/fault.schema');

const router = express.Router();
const service = new FaultsService();

router.get('/',
  validatorHandler(queryFaultSchema, 'query')
  , async (req, res, next) => {
    try {
      const fault = await service.find(req.query);
      res.json(fault);
    } catch (error) {
      next(error)
    }
  }
);

router.get('/:id',
  validatorHandler(getFaultSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const fault = await service.findOne(id);
      res.json(fault);
    } catch (error) {
      next(error)
    };
  }
);

router.post('/',
  validatorHandler(createFaultSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newFault = await service.create(body);
      res.status(201).json(newFault);
    } catch (error) {
      next(error)
    }
  }
);

router.patch('/:id',
  validatorHandler(getFaultSchema, 'params'),
  validatorHandler(updateFaultSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateFault = await service.update(id, body);
      res.json(updateFault);
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getFaultSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.json({ message: 'Delete success.' });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
