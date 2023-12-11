const express = require('express');
const router = express.Router();
const { body, query, param } = require('express-validator');
const controllers = require("../controller/loginRegister")


router.get('/create-catalog',
  [
    body('username').exists().withMessage('name is required'),
    body('password').exists().withMessage('Password is required'),
    body('userType').exists().withMessage('User Type is required'),
   ], 
   controllers.register
);




router.get('/orders',
  [
    body('email').exists().withMessage('email is required'),
    body('password').exists().withMessage('Password is required'),
  ],
  controllers.login
);




module.exports = router;