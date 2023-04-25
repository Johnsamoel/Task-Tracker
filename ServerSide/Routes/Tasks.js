const express = require('express');

const router = express.Router();

// tasks controllers
const { AddTask , GetTaskById , DeleteTask , updateTask} = require('../Controllers/Tasks');

// get user tasks controller
const {getUserTasks} = require('../Controllers/User');

// task creation validation fn
const CheckTaskFormValues = require('../Utils/CreateTaskValidation');

// task update validation fn
const CheckUpdateTaskFormValues = require('../Utils/UpdateTaskValidation');

// multer to upload files.
const multer = require('multer');

// importing multer configuration objs
const { TaskImageStorage , fileFilter} = require('../Utils/MulterConfigurations')


router.post('/addTask', multer({storage: TaskImageStorage , fileFilter: fileFilter , limits: { fileSize: 10 * 1024 * 1024 }}).single('image') , CheckTaskFormValues() ,AddTask)

router.get( '/GetTask/:TaskId' , GetTaskById)

router.delete( '/deleteTask/:TaskId' , DeleteTask)

router.patch( '/editTask/:TaskId' , multer({storage: TaskImageStorage , fileFilter: fileFilter , limits: { fileSize: 10 * 1024 * 1024 }}).single('image') , CheckUpdateTaskFormValues() ,updateTask)

router.get('/userTasks?:pageNumber', getUserTasks)

module.exports = router;