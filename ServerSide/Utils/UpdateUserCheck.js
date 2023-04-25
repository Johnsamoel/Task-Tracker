// importing validator library
const {check} = require('express-validator');


const CheckUpdateFormValues = () => {

    return [
        // checking id value
        check('userId' , "invalid User id").trim().isMongoId().notEmpty().withMessage('User id is Required'),
    ]
};


module.exports = CheckUpdateFormValues