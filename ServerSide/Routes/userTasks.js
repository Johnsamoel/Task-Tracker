const express = require('express');

const router = express.Router();

const {GetAllTasks , AddTask , GetUserTaskById , DeleteTask , updateTask} = require('../Controllers/Tasks')

router.get( '/Tasks' , GetAllTasks)

router.post('/Tasks', AddTask)

router.get( '/GetTask' , GetUserTaskById)

router.delete( '/Task' , DeleteTask)

router.put( '/Task' , updateTask)

module.exports = router;