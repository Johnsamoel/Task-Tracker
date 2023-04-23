// importing validator library
const {body} = require('express-validator');

// import status values
const {Task_Status} = require('./Consts')

//importing Task Model
const CheckTaskFormValues = () => {

    return [
        // checking title value
        body('Task.title' , 'Invalid Title value').trim().notEmpty().withMessage('Title is Required').isLength({min:4 , max:50}),

        // checking description value
        body('Task.description' , 'Invalid description').trim().notEmpty().withMessage('Description is Required').isLength({min:6 , max:400}),
        
        // checking image value
        body('Task.image' , "Invalid Image URL").trim().isURL(),

        // checking status value
        body('Task.status' , "Invalid status value, Role should be Either 'Not Started' or 'Inprogress' or 'Completed' ").trim().notEmpty().withMessage('status is Required').custom((value , {req}) =>{
                    if( !Task_Status[`${value}`] ){
                        return false
                    }
                    return true
        } )
    ]
};

module.exports = CheckTaskFormValues