const { Model, DataTypes, Sequelize } = require('sequelize');
const { PPU_TABLE } = require('./ppu.model');
const { TYPE_TABLE } = require('./type.model');
const FAULT_TABLE = 'faults'


const FaultSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fault: {
    allowNull: false,
    type: DataTypes.STRING
  },
  faultSymptoms: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'fault_symptoms'
  },
  faultDiagnosis: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'fault_diagnosis'
  },
  faultSolution: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'fault_solution'
  },
  kmCurrent: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'km_current'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  typeId: {
    field: 'type_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  ppuId: {
    field: 'ppu_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PPU_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Fault extends Model {
  static associate(models) {
    this.belongsTo(models.Type, {as: 'type', foreignKey: 'typeId'});
    this.belongsTo(models.PPU, { as: 'ppu', foreignKey: 'ppuId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FAULT_TABLE,
      modelName: 'Fault',
      timestamps: false,
    }
  }
}

module.exports = { FAULT_TABLE, FaultSchema, Fault }
