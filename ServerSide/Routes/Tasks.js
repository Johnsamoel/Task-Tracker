const express = require('express');

const router = express.Router();

const { AddTask , GetUserTaskById , DeleteTask , updateTask} = require('../Controllers/Tasks');
const {getUserTasks} = require('../Controllers/User');

// task creation validation fn
const CheckTaskFormValues = require('../Utils/CreateTaskValidation');

// task update validation fn
const CheckUpdateTaskFormValues = require('../Utils/UpdateTaskValidation');


router.post('/addTask', CheckTaskFormValues() ,AddTask)

router.get( '/GetTask' , GetUserTaskById)

router.delete( '/deleteTask' , DeleteTask)

router.put( '/editTask' , CheckUpdateTaskFormValues() ,updateTask)

router.get('/userTasks?:pageNumber',getUserTasks)

module.exports = router;