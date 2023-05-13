const express = require('express');

const router = express.Router();

const { DeleteUser , GetUserById ,updateUser, getUserFriends } = require('../Controllers/User');

const CheckUpdateFormValues = require('../Utils/UpdateUserCheck');
const { IsAuthenticated } = require('../middleware/IsAuthenticated');

// multer to upload files.
const multer = require('multer');

// importing multer configuration objs
const {AvatarStorage  , fileFilter} = require('../Utils/MulterConfigurations');


router.get('/GetUser/:userId',IsAuthenticated , GetUserById);

router.get('/GetFriends/:userId',IsAuthenticated , getUserFriends);

router.patch('/updateUser/:userId',IsAuthenticated , multer({storage: AvatarStorage , fileFilter: fileFilter , limits: { fileSize: 10 * 1024 * 1024 }}).single('avatar') , CheckUpdateFormValues()  , updateUser);


router.delete('/deleteUser/:userId',IsAuthenticated , DeleteUser);



module.exports = router


