// const Traveller = require('./Traveller');
// const Location = require('./Location');
// const Trip = require('./Trip');

import Restaurants from './Restaurants';
import OrderTypes from './OrderTypes';
import ItemTypes from './ItemTypes';
import Customers from './Customers';
import Items from './Items';
import Orders from './Orders';
import OrderItems from './OrderItems';

Restaurants.belongsToMany(OrderTypes, {
  // Define the third table needed to store the foreign keys
  through: {
    model: OrderTypes,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'restaurants_order_types'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
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
