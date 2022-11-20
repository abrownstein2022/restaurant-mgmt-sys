// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

/**
 * create our Customers model
*/
class Customers extends Model {}  

// create fields/columns for Restaurants model
Customers.init(
  {
    customer_id: {
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
    customer_first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer_login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_password: {
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'customers'   //lowercase for modelname only
  }
);

//module.exports = Customers;
export default Customers;
