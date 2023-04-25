const express = require('express');

const router = express.Router();

const { RegisterUser , Login , Logout} = require('../Controllers/auth');

// user fileds validations
const CheckLoginFormValues = require('../Utils/UserLoginValidation');

// multer to upload files.
const multer = require('multer');

// importing multer configuration objs
const {AvatarStorage  , fileFilter} = require('../Utils/MulterConfigurations')


router.post('/register' , multer({storage: AvatarStorage , fileFilter: fileFilter , limits: { fileSize: 10 * 1024 * 1024 }}).single('avatar') , RegisterUser);

router.post('/login' , CheckLoginFormValues() , Login);

router.post('/logout' , Logout);


module.exports = router;
