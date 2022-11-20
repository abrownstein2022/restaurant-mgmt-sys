// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

/**
 * create our Orders model
*/
class Orders extends Model {}  

// create fields/columns for Restaurants model
Orders.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ordertypes',
        key: 'order_type_id',
        unique: false
      }
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customers',
        key: 'customer_id',
        unique: false
      }
    }, 
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW  //built-in function/method
    },
    order_notes: {
      type: DataTypes.STRING,
      allowNull: true
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
    modelName: 'orders'   //lowercase for modelname only
  }
);

//module.exports = Customers;
export default Orders;
