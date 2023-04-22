const express = require('express');

const router = express.Router();
const { GetAllTasks,GetUsers } = require('../Controllers/Admin');

router.get('/users', GetUsers)
router.get("/tasks?:pageNumber", GetAllTasks)
module.exports = router;