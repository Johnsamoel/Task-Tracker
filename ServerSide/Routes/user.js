const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser } = require('../Controllers/User');


router.get('/GetUser' , GetUserById);

router.put('/user' , updateUser);

router.delete('/user' , DeleteUser);



module.exports = router


