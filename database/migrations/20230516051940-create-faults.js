
'use strict';

const {TYPE_TABLE, TypesSchema} = require('../models/types.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TYPE_TABLE, TypesSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TYPE_TABLE)
  }
};
