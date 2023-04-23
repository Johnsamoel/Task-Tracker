// importing validator library
const {body} = require('express-validator');

// importing User model.
const User = require('../Models/user');

const CheckRegisterFormValues = () => {

    return [
        // checking name value
        body('name' , 'Invalid Name value').isAlpha().trim().isLength({min:4 , max:12}),

        // checking email value
        body('email' , 'The Email is Invalid').isEmail().trim().custom(async(value, {req}) => {
            const userData = await User.findOne({ email: value });
            if (userData) {
                 throw new Error("The email Already Exists")
              }
        }),
        
        // checking password value
        body('password' , 'Password should be at least 6 characters long and contains 2 symbols , 2 lowercases and 2 uppercases').isStrongPassword({minLength:6 ,minSymbols: 2, minLowercase:2}).isLength({min: 6 , max: 12}).trim(),

        // checking age value
        body('age' , 'Enter a number between 18 and 90').isInt({min:18 , max:90}).trim(),

        // checking Role value
        body('role' , "Invalid Role value, Role should be Either Admin or User").trim().custom((value , {req}) =>{
            if(value.trim() !== 'Admin' && value !== 'User'){
                return false
            }
            return true
        } )
    ]
};


module.exports = CheckRegisterFormValues