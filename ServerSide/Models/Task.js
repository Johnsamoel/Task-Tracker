const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title : {
        type: String,
        required: [true , "title is required"],
        minlength : [5 , "minimun title length is 5 characters"],
        maxlength : [50 , "maxmun title length is 50 characters"],
        validate: {
            validator: function(v) {
              return !isFinite(v)
            },
            message: 'Invalid title'
        }  
    },
    description: {
        type: String,
        required: [true , "description is required"],
        maxlength: [400 , "maximun name length is 400 characters"] ,
        validate: {
            validator: function(v) {
              return !isFinite(v)
            },
            message: 'Invalid description'
        }  
    },
    image : {
        type: String,
        required: false     
    },
    userId: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true , " user id is required"],
        ref: 'User'
    },
    status:{
        type:String,
        required:[true , "status is required"],
        enum:[ "Not Started","Inprogress", "Completed" , "Cancelled"]
    }
} , {collection : 'Tasks'})


module.exports = mongoose.model('Task' , TaskSchema)

