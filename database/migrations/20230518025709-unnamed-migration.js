'use strict';

const {FAULT_TABLE, FaultSchema} = require('../models/fault.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(FAULT_TABLE, FaultSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(FAULT_TABLE, FaultSchema)
  }
};
