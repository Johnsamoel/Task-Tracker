const express = require('express');

const router = express.Router();

const { AddTask , GetTaskById , DeleteTask , updateTask} = require('../Controllers/Tasks');
const {getUserTasks} = require('../Controllers/User');

// task creation validation fn
const CheckTaskFormValues = require('../Utils/CreateTaskValidation');

// task update validation fn
const CheckUpdateTaskFormValues = require('../Utils/UpdateTaskValidation');
const { IsAuthenticated } = require('../middleware/IsAuthenticated');


router.post('/addTask', CheckTaskFormValues() ,AddTask)

router.get( '/GetTask/:TaskId',IsAuthenticated , GetTaskById)

router.delete( '/deleteTask/:TaskId',IsAuthenticated , DeleteTask)

router.patch( '/editTask/:TaskId' ,IsAuthenticated, CheckUpdateTaskFormValues() ,updateTask)

router.get('/userTasks?:pageNumber',IsAuthenticated,getUserTasks)

module.exports = router;