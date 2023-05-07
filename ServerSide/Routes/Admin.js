const express = require('express');

const router = express.Router();
const { GetAllTasks,GetUsers } = require('../Controllers/Admin');
const { IsAuthenticated } = require('../middleware/IsAuthenticated');

router.get('/users',IsAuthenticated, GetUsers) //add page number as query param
router.get("/tasks",IsAuthenticated, GetAllTasks)//add page number as query param

module.exports = router;