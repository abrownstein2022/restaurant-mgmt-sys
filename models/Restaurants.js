// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

/**
 * create our Restaurants model
*/
class Restaurants extends Model {}  

// create fields/columns for Restaurants model
Restaurants.init(
  {
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurant_desc: {
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
    modelName: 'restaurants'   //lowercase for modelname only
  }
);

//module.exports = Restaurants;
export default Restaurants;
