const express = require('express');

const TypesService = require('../services/types.services')
const validatorHandler = require('../middlewares/validator.handler');
const { createTypeSchema, updateTypeSchema, getTypeSchema } = require('../schemas/type.schema');

const router = express.Router();
const service = new TypesService();

router.get('/', async (req, res, next) => {
  try {
    const type = await service.find();
    res.json(type);
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  validatorHandler(getTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const type = await service.findOne(id);
      res.json(type);
    } catch (error) {
      next(error)
    };
  }
);

router.post('/',
  validatorHandler(createTypeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newType = await service.create(body);
      res.status(201).json(newType);
    } catch (error) {
      next(error)
    }
  }
);

router.patch('/:id',
  validatorHandler(getTypeSchema, 'params'),
  validatorHandler(updateTypeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const type = await service.update(id, body);
      res.json(type);
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getTypeSchema, 'params'),
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
