const { Model, DataTypes, Sequelize } = require('sequelize');
const PPU_TABLE = 'ppus'

const PPUSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ppu: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  carBrand: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'car_brand',
    defaultValue: 'Unassigned.'
  },
  carModel: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'car_model',
    defaultValue: 'Unassigned.'
  },
  carYear: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'car_year',
    defaultValue: 'Unassigned.'
  },
  kmInit: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'km_init'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class PPU extends Model {
  static associate(models) {
    this.hasMany(models.Fault, {
      as: 'fault',
      foreignKey: 'ppuId'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PPU_TABLE,
      modelName: 'PPU',
      timestamps: false,
    }
  }
}

module.exports = { PPU_TABLE, PPUSchema, PPU }
