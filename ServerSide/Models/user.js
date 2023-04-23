const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true , "name is Required"]
    },
    age: {
        type: Number,
        min: 18,
        max: 90,
        required: [true , "age is Required"]
    },
    email: {
        type: String,
        required: [true , "email is Required"]
    },
    password: {
        type: String,
        required: [true , "password is Required"]
    },
    tasks: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true , "task is Required"],
        ref: 'Task'
    },
    avatar: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: [true , "role is Required"],
        enum: ["Admin", "User"]
    },
    friends: {
        type: [mongoose.Schema.Types.ObjectId],
        required: false,
        ref: 'User'
    }
}, { collection: 'Users' })

module.exports = mongoose.model('User', UserSchema)