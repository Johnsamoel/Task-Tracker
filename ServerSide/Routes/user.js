const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser } = require('../Controllers/User');

const CheckUpdateFormValues = require('../Utils/UpdateUserCheck');


router.get('/GetUser' , GetUserById);

router.put('/updateUser' , CheckUpdateFormValues()  ,updateUser);

router.delete('/deleteUser' , DeleteUser);



module.exports = router


