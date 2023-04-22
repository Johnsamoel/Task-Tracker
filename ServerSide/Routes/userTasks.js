const express = require('express');

const router = express.Router();

const { AddTask , GetUserTaskById , DeleteTask , updateTask} = require('../Controllers/Tasks')
const {getUserTasks} = require('../Controllers/User')


router.post('/addTask', AddTask)

router.get( '/GetTask' , GetUserTaskById)

router.delete( '/deleteTask' , DeleteTask)

router.put( '/editTask' , updateTask)
router.get('/userTasks',getUserTasks)

module.exports = router;