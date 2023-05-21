const { Model, DataTypes, Sequelize } = require('sequelize');

const TYPE_TABLE = 'types';

const TypesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Type extends Model {
  static associate(models) {
    this.hasMany(models.Fault, {
      as: 'fault',
      foreignKey: 'typeId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TYPE_TABLE,
      modelName: 'Type',
      timestamps: false,
    }
  }
}

module.exports = {
  TYPE_TABLE,
  Type,
  TypesSchema
}
