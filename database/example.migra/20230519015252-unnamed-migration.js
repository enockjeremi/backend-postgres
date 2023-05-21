'use strict';

const { DataTypes } = require('sequelize');
const {FAULT_TABLE, FaultSchema} = require('../models/fault.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(FAULT_TABLE, 'fault_symptoms', {
      type: DataTypes.TEXT
    });
    await queryInterface.changeColumn(FAULT_TABLE, 'fault_diagnosis', {
      type: DataTypes.TEXT
    })
    await queryInterface.changeColumn(FAULT_TABLE, 'fault_solution', {
      type: DataTypes.TEXT
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(FAULT_TABLE, FaultSchema)
  }
};
