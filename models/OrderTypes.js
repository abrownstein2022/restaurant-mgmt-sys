// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

/**
 * create our OrderTypes model
*/
class OrderTypes extends Model {}  

// create fields/columns for Restaurants model
OrderTypes.init(
  {
    order_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'restaurants',
        key: 'restaurant_id',
        unique: false
      }
    },
    order_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW  //built-in function/method
    },
    added_by: {
      type: DataTypes.STRING,
      allowNull: true   
    },
  }, 
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ordertypes'   //lowercase for modelname only
  }
);

//module.exports = OrderTypes;
export default OrderTypes;
