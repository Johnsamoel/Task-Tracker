const mongoose = require('mongoose');
const { HASHING_SALTROUND } = require("../configuration");

const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true , "name is Required"],  
        minlength: [4 , "minimum name length is 4 characters"],
        maxlength: [15 , "maximun name length is 15 characters"] ,
        validate: {
            validator: function(v) {
              return !isFinite(v)
            },
            message: 'Invalid Name'
        }   
    },
    age: {
        type: Number,
        min: 18,
        max: 90,
        required: [true , "age is Required"]
    },
    email: {
        type: String,
        required: [true , "email is Required"],
        unique: [true , "Email Already Exists, Pick another one."],
        validate: {
            validator: function(v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: 'Invalid email address'
        }
    },
    password: {
        type: String,
        required: [true , "password is Required"],
        minlength: [8 , "Password should be 8 characters"]
    },
    tasks: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true , "task is Required"],
        ref: 'Task'
    },
    avatar: {
        type: String
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



UserSchema.pre('save', async function () {
    
    const userdoc = this;
    
    //hashing
    const hashed = await bcrypt.hash(userdoc.password, parseInt(HASHING_SALTROUND));

    userdoc.password = hashed;
  })

module.exports = mongoose.model('User', UserSchema)