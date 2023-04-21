const express = require('express');

const router = express.Router();

const { RegisterUser , Login , Logout} = require('../Controllers/auth');


router.post('/register' , RegisterUser);

router.post('/login' , Login);

router.post('/logout' , Logout);


module.exports = router;
