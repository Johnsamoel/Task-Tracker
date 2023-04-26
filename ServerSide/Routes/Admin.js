const express = require('express');

const router = express.Router();
const { GetAllTasks,GetUsers } = require('../Controllers/Admin');
const { IsAuthenticated } = require('../middleware/IsAuthenticated');

router.get('/users?:pageNumber',IsAuthenticated, GetUsers)
router.get("/tasks?:pageNumber",IsAuthenticated, GetAllTasks)
module.exports = router;