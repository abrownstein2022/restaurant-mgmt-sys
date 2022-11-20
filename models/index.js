// const Traveller = require('./Traveller');
// const Location = require('./Location');
// const Trip = require('./Trip');
//simpllfies developer experience for other developers who need to use this data
//connects all the table js files with associations

import Restaurants from './Restaurants.js';
import OrderTypes from './OrderTypes.js';
import ItemTypes from './ItemTypes.js';
import Customers from './Customers.js';
import Items from './Items.js';
import Orders from './Orders.js';
import OrderItems from './OrderItems.js';

// Define a restaurant as having many customers, thus creating a foreign key in the customers table
Restaurants.hasMany(Customers, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});

Restaurants.hasMany(OrderTypes, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});

Restaurants.hasMany(Items, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});

Restaurants.hasMany(ItemTypes, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});

ItemTypes.hasMany(Items, {
  foreignKey: 'item_type_id',
  onDelete: 'CASCADE',
});

OrderTypes.hasMany(Orders, {
  foreignKey: 'order_type_id',
  onDelete: 'CASCADE',
});

Customers.hasMany(Orders, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE',
});

Items.hasMany(OrderItems, {
  foreignKey: 'item_id',
  onDelete: 'CASCADE',
});

Orders.hasMany(OrderItems, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE',
});

//module.exports = { Traveller, Location, Trip };
export {
  Restaurants,
  OrderTypes,
  ItemTypes,
  Customers,
  Items,
  Orders,
  OrderItems
}
