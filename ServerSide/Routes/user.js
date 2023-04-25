const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser } = require('../Controllers/User');

const CheckUpdateFormValues = require('../Utils/UpdateUserCheck');

// multer to upload files.
const multer = require('multer');

// importing multer configuration objs
const {AvatarStorage  , fileFilter} = require('../Utils/MulterConfigurations');


router.get('/GetUser/:userId' , GetUserById);

router.patch('/updateUser/:userId' , multer({storage: AvatarStorage , fileFilter: fileFilter , limits: { fileSize: 10 * 1024 * 1024 }}).single('avatar') , CheckUpdateFormValues()  , updateUser);

router.delete('/deleteUser/:userId' , DeleteUser);



module.exports = router


