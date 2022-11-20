// const sequelize = require('../config/connection');
// const { Traveller, Location, Trip } = require('../models');

import sequelize from '../config/connection';
import {Restaurants, Customers, ItemTypes, Items, OrderTypes, Orders, OrderItems} from '../models';

// const travellerSeedData = require('./travellerSeedData.json');
// const locationSeedData = require('./locationSeedData.json');

import restaurantsSeedData from './restaurantsSeedData.json';
import customersSeedData from './customersSeedData.json';
import itemtypesSeedData from './itemtypesSeedData.json';
import itemsSeedData from './itemsSeedData.json';
import ordertypesSeedData from './ordertypesSeedData.json';
import ordersSeedData from './ordersSeedData.json';
import orderitemsSeedData from './orderitemsSeedData.json';

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travellers = await Traveller.bulkCreate(travellerSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  

  process.exit(0);
};

seedDatabase();
