const { User, UserSchema } = require('./user.model');
const { PPU, PPUSchema } = require('./ppu.model');
const { Fault, FaultSchema } = require('./fault.model');
const {Type, TypesSchema} = require('./type.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  PPU.init(PPUSchema, PPU.config(sequelize));
  Fault.init(FaultSchema, Fault.config(sequelize));
  Type.init(TypesSchema, Type.config(sequelize));

  Fault.associate(sequelize.models);
  PPU.associate(sequelize.models);
  Type.associate(sequelize.models);
}

module.exports = setupModels;
