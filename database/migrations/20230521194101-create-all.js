'use strict';

const {FAULT_TABLE, FaultSchema} = require('../models/fault.model')
const {TYPE_TABLE, TypesSchema} = require('../models/type.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TYPE_TABLE, TypesSchema);
    await queryInterface.createTable(FAULT_TABLE, FaultSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TYPE_TABLE);
    await queryInterface.dropTable(FAULT_TABLE);
  }
};
