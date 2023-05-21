const express = require('express');

const PPUSService = require('./../services/ppus.services');
const validatorHandler = require('../middlewares/validator.handler');
const { createPPUSchema, updatePPUSchema, getPPUSchema, queryPPUSchema } = require('../schemas/ppu.schema');

const router = express.Router();
const service = new PPUSService();

router.get('/',
  validatorHandler(queryPPUSchema, 'query')
  , async (req, res, next) => {
    try {
      const ppu = await service.find(req.query);
      res.json(ppu);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getPPUSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const ppu = await service.findOne(id);
      res.json(ppu);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPPUSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPPU = await service.create(body);
      res.status(201).json(newPPU);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPPUSchema, 'params'),
  validatorHandler(updatePPUSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ppu = await service.update(id, body);
      res.json(ppu);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPPUSchema, 'params'),
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
