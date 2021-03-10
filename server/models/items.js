'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    static associate (models) {
      // define association here
      this.hasMany(models.orders_items, { foreignKey: 'itemID' });
    }
  }
  items.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'items'
  });
  return items;
};
