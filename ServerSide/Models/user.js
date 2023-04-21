const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age : {
        type: Number,
        min: 18,
        max: 90,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks : {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Task'
    },
    avatar : {
        type: String,
        required: false
    },
    friends : {
        type: [mongoose.Schema.Types.ObjectId],
        required: false,
        ref: 'User'
    }
}, {collection: 'Users'})

module.exports = mongoose.model('User' , UserSchema)