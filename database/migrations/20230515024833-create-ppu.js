'use strict';

const { PPU_TABLE, PPUSchema } = require('./../models/ppu.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PPU_TABLE, PPUSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PPU_TABLE, PPUSchema);
  }
};
