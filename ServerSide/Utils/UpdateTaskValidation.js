// importing validator library
const {body , check} = require('express-validator');

// import status values
const {Task_Status} = require('./Consts')

//importing Task Model
const CheckUpdateTaskFormValues = () => {

    return [
        // id checking
        check('TaskId' , "invalid Task id value").trim().isMongoId().notEmpty().withMessage('Task id is Required')
    ]
};

module.exports = CheckUpdateTaskFormValues