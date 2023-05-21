const express = require('express');

const ppusRouter = require('./ppus.router');
const usersRouter = require('./users.router');
const faultRouter = require('./faults.router');
const typeRouter = require('./types.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/ppus', ppusRouter);
  router.use('/users', usersRouter);
  router.use('/faults', faultRouter);
  router.use('/types', typeRouter);
}

module.exports = routerApi;
