// const sequelize = require('../config/connection');
// const { Traveller, Location, Trip } = require('../models');

import sequelize from '../config/connection.js';
import {Restaurants, Customers, ItemTypes, Items, OrderTypes, Orders, OrderItems} from '../models/index.js';

// const travellerSeedData = require('./travellerSeedData.json');
// const locationSeedData = require('./locationSeedData.json');

//! JS does not allow json file imports but, can use 'assert' statement to allow
import restaurantsSeedData from './restaurantsSeedData.json' assert { type: 'json'};
import customersSeedData from './customersSeedData.json'assert { type: 'json'};
import itemtypesSeedData from './itemtypesSeedData.json' assert { type: 'json'};
import itemsSeedData from './itemsSeedData.json' assert { type: 'json'};
import ordertypesSeedData from './ordertypesSeedData.json' assert { type: 'json'};
import ordersSeedData from './ordersSeedData.json' assert { type: 'json'};
import orderitemsSeedData from './orderitemsSeedData.json' assert { type: 'json'};

const addData=(data) => {
  data = data.map(item => {
    item.date_added = Date.now()
    item.added_by = 'alexis'
    return item
  })
  return data
}
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // loop throught the seed data
  // add the required fields
  // then return data to 'bulkCreate'
  await Restaurants.bulkCreate(addData(restaurantsSeedData));
  await Customers.bulkCreate(addData(customersSeedData));
  await ItemTypes.bulkCreate(addData(itemtypesSeedData));
  await Items.bulkCreate(addData(itemsSeedData));
  await OrderTypes.bulkCreate(addData(ordertypesSeedData));
  await Orders.bulkCreate(addData(ordersSeedData));
  await OrderItems.bulkCreate(addData(orderitemsSeedData));


  

  process.exit(0);
};

seedDatabase();
