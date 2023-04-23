const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title : {
        type: String,
        required: [true , "title is required"]
    },
    description: {
        type: String,
        required: [true , "description is required"]
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

