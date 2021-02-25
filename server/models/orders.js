'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate (models) {
      this.belongsToMany(models.items, { through: models.orders_items });
      this.belongsTo(models.users);
    }
  }
  orders.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    user_id: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders'
  });
  return orders;
};
