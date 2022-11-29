const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const orderRoutes = require("./orderRoutes.js");

router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
// localhost:3000/api/orders/whatever

module.exports = router;
