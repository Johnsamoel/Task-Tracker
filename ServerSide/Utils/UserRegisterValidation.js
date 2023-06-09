// importing validator library
const {body} = require('express-validator');

// importing User model.
const User = require('../Models/user');

const CheckRegisterFormValues = () => {

    return [
        // checking name value
        body('name' , 'Invalid Name value').isAlpha().trim().isLength({min:4 , max:12}).notEmpty().withMessage('Name is Required'),

        // checking email value
        body('email' , 'The Email is Invalid').isEmail().trim().notEmpty().withMessage('Email is Required').custom(async(value, {req}) => {
            const userData = await User.findOne({ email: value });
            if (userData) {
                 throw new Error("The email Already Exists")
              }
        }),
        
        // checking password value
        body('password' , 'Password should be at least 6 characters long and contains 2 symbols , 2 lowercases and 2 uppercases')
        .isStrongPassword({minLength:4 ,minUppercase:1, minLowercase:1, minNumbers:1})
        .isLength({min: 4 , max: 8}).trim().notEmpty().withMessage('Password is Required'),

        // checking age value
        body('age' , 'Enter a number between 18 and 90')
        .isInt({min:18 , max:90}).notEmpty().withMessage('Age is Required').trim(),

        // checking Role value
        body('role' , "Invalid Role value, Role should be Either Admin or User").notEmpty().withMessage('Role is Required').trim().custom((value , {req}) =>{
            if(value.trim() !== 'Admin' && value !== 'User'){
                return false
            }
            return true
        } )
    ]
};


module.exports = CheckRegisterFormValues