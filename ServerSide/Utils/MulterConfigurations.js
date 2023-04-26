// importing multer
const multer = require('multer');

// unique id value
const { v4: uuidv4 } = require('uuid');

// importing accepted avatar values
const {AvatarValues} = require('../Utils/Consts')

// configuring file storage with multer.
const AvatarStorage = multer.diskStorage({
    destination: (req , file , cb) => {
        cb(null , "Public/Avatars" )
    },
    filename: (req , file , cb) => {
        cb(null , uuidv4() + file.originalname)
    }
})

// configuring file storage with multer.
const TaskImageStorage = multer.diskStorage({
    destination: (req , file , cb) => {
        cb(null , "Public/Tasks" )
    },
    filename: (req , file , cb) => {
        cb(null , uuidv4() + file.originalname)
    }
})

// creating file filter to only accept valid files.
const fileFilter = (req , file , cb) => {
    if( AvatarValues[file.mimetype]) {
        cb(null , true)
    
    }else{
        cb(null , false)
    }
}

module.exports = {
    AvatarStorage,
    fileFilter,
    TaskImageStorage
}