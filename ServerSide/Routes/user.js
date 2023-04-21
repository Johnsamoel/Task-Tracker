const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById , GetUsers ,updateUser } = require('../Controllers/User');

router.get('/users' , GetUsers);

router.get('/GetUser' , GetUserById);

router.put('/user' , updateUser);

router.delete('/user' , DeleteUser);



module.exports = router


