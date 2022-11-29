const router = require("express").Router();
// file servers assume a path to a directory (/path/to) is referencing an index file in
// that directory (/path/to/index.any)
const { Orders, OrderItems } = require("../../models");
const withAuth = require("../../utils/auth");
const logger = require('../../utils/logger.js');




//! kweku
//! Common REST standards
//API order logic goes here 
router.get('view-orders', async (req, res) => {
  // get a list of all my orders
  let orderData = await Orders.find({
    where: {
      customer_id: req.session.customer_id
    }
  })

  res.status(200).json(orderData)

})

router.post('place-order', (req, res) => {
    
  // place an order

})


module.exports = router;  //alexis 11/28/22