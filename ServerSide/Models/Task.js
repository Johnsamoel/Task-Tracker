const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: false     
    },
    userId: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'User'
    },
    status:{
        type:String,
        required:true,
        enum:[ "Not Started","Inprogress", "Completed" , "Cancelled"]
    }
} , {collection : 'Tasks'})


module.exports = mongoose.model('Task' , TaskSchema)

