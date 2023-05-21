'use strict';

const { FAULT_TABLE, FaultSchema } = require('./../models/fault.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(FAULT_TABLE, 'type_id', FaultSchema.typeId);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(FAULT_TABLE, 'type_id', FaultSchema.typeId);
  }
};
