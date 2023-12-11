const express = require('express');
const router = express.Router();
const { body, query, param } = require('express-validator');
const middleWare = require("../middlewares/loginRegister")


router.post('/register',
    [
    body('username').exists().withMessage('name is required'),
    body('password').exists().withMessage('Password is required'),
    body('userType').exists().withMessage('User Type is required'),
    ],

   middleWare.register

);

router.post('/login',
  
[
    body('email').exists().withMessage('email is required'),
    body('password').exists().withMessage('Password is required'),
],

  middleWare.login

);


module.exports = router;