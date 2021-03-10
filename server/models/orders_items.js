'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders_items extends Model {
    static associate (models) {
      this.belongsTo(models.items);
      this.belongsTo(models.orderlists);
    }
  }
  orders_items.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    orderlistId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    orderQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders_items'
  });
  return orders_items;
};
