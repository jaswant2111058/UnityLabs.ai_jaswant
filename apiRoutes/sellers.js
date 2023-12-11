const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const controllers = require('../controllers/sellers');
const middleWare = require("../middlewares/auth")

// Route to create a new product in the catalog
router.post(
  '/create-product',
  [
    body('list_of_items').exists().withMessage('list_of_items Type is required'),
  ],
  controllers.create_catalog, middleWare.authMiddleware,middleWare.checkSeller
);

// Route to get a list of orders
router.get('/orders', controllers.orders, middleWare.authMiddleware, middleWare.checkSeller);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = router;
