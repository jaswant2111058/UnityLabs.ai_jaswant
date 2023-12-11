const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const controllers = require('../controller/loginRegister');

// Route to get the list of sellers
router.get('/list-of-sellers', controllers.list_of_sellers);

// Route to get a seller's catalog
router.get('/seller-catalog/:seller_id', controllers.seller_catalog);

// Route to create a new order for a seller
router.post(
  '/create-order/:seller_id',
  [
    body('list_of_items').exists().withMessage('list_of_items is required'),
  ],
  controllers.create_order
);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = router;
