// importing validator library
const {body} = require('express-validator');
const bcrypt = require("bcryptjs");

// importing User model.
const User = require('../Models/user');

const CheckLoginFormValues = () => {
        let user;
    return [
        // checking email value
        body('email' , 'The Email is Invalid').isEmail().trim().notEmpty().withMessage('Email is Required').custom(async(value, {req}) => {
            const userData = await User.findOne({ email: value });
            req.user = userData
            if (!userData) {
                 throw new Error("Invalid Credentials")
              }
            user  = userData
              return true
        }),
        // checking password value
        body('password' , 'Invalid Credentials').isLength({min: 6 , max: 12}).notEmpty().withMessage('Password is Required').trim().custom(async(value , {req}) => {
             bcrypt.compare(value, user.password, (error , success) => {
                if(error){
                    throw new Error("Invalid Credentials !!")
                }else {
                    return true
                }
            });
        }),

    ]
};


module.exports = CheckLoginFormValues