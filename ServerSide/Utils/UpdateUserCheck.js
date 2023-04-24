// importing validator library
const {body, check} = require('express-validator');

// importing User model.
const User = require('../Models/user');

const CheckUpdateFormValues = () => {

    return [
        // checking id value
        check('userId' , "invalid User id").trim().isMongoId().notEmpty().withMessage('User id is Required'),
    ]
};


module.exports = CheckUpdateFormValues