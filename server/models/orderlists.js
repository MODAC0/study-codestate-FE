'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderlists extends Model {
    static associate (models) {
      this.hasMany(models.orders_items, { foreignKey: 'orderlistId' });
      this.belongsTo(models.users);
    }
  }
  orderlists.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orderlists'
  });
  return orderlists;
};
