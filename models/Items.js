// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

/**
 * create our Items model
*/
class Items extends Model {}  

// create fields/columns for Restaurants model
Items.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'itemtypes',
        key: 'item_type_id',
        unique: false
      }
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'restaurants',
        key: 'restaurant_id',
        unique: false
      }
    }, 
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_cost: {
      type: DataTypes.DECIMAL,
      defaultValue: 0  //built-in function/method
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
    modelName: 'items'   //lowercase for modelname only
  }
);

//module.exports = Items;
export default Items;
