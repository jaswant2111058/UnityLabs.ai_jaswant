const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const controllers = require('../controllers/sellers');
const middleWare = require("../middlewares/auth")

// Route to create catalog
router.post( '/create-catalog',
  [
    body('list_of_items').exists().withMessage('list_of_items Type is required'),
  ],
   middleWare.authMiddleware,middleWare.checkSeller,controllers.create_catalog,
);

// Route to get a list of orders
router.get('/orders', middleWare.authMiddleware, middleWare.checkSeller,controllers.orders,);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = router;
