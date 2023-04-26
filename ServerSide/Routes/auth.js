const express = require('express');

const router = express.Router();

const { RegisterUser , Login , Logout} = require('../Controllers/auth');

const CheckRegisterFormValues = require('../Utils/UserRegisterValidation');

const CheckLoginFormValues = require('../Utils/UserLoginValidation');


router.post('/register', RegisterUser);

router.post('/login' , CheckLoginFormValues() , Login);

router.post('/logout' , Logout);


module.exports = router;
