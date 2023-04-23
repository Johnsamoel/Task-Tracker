const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser } = require('../Controllers/User');


router.get('/GetUser' , GetUserById);

router.put('/updateUser' , updateUser);

router.delete('/deleteUser' , DeleteUser);



module.exports = router


