const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser } = require('../Controllers/User');

const CheckUpdateFormValues = require('../Utils/UpdateUserCheck');
const { IsAuthenticated } = require('../middleware/IsAuthenticated');


router.get('/GetUser/:userId',IsAuthenticated , GetUserById);

router.patch('/updateUser/:userId' ,IsAuthenticated, CheckUpdateFormValues()  , updateUser);

router.delete('/deleteUser/:userId',IsAuthenticated , DeleteUser);



module.exports = router


