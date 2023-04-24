const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser } = require('../Controllers/User');

const CheckUpdateFormValues = require('../Utils/UpdateUserCheck');


router.get('/GetUser/:userId' , GetUserById);

router.patch('/updateUser/:userId' , CheckUpdateFormValues()  , updateUser);

router.delete('/deleteUser/:userId' , DeleteUser);



module.exports = router


