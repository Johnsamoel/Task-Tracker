// importing validator library
const {body} = require('express-validator');
const bycrypt = require("bcryptjs");

// importing User model.
const User = require('../Models/user');

const CheckLoginFormValues = () => {
        let user;
    return [
        // checking email value
        body('email' , 'The Email is Invalid').isEmail().trim().custom(async(value, {req}) => {
            const userData = await User.findOne({ email: value });
            req.user = userData
            if (!userData) {
                 throw new Error("Invalid Credentials")
              }
            user  = userData
              return true
        }),
        // checking password value
        body('password' , 'Invalid Credentials').isLength({min: 6 , max: 12}).trim().custom(async(value , {req}) => {
            const isValidPassword = await bycrypt.compare(value, user.password);
            if(!isValidPassword) {
                throw new Error("Invalid Credentials !!")
            }
        }),

    ]
};


module.exports = CheckLoginFormValues