'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders_items extends Model {
    static associate (models) {
    }
  }
  orders_items.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    order_id: DataTypes.INTEGER,
    items_id: DataTypes.INTEGER,
    order_quantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders_items'
  });
  return orders_items;
};
