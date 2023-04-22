const express = require('express');
const { DB_NAME,DB_PASSWORD,DB_USERNAME } = require("./configuration");
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const {IsAuthenticated} = require('./middleware/IsAuthenticated');
//admin routes
const adminDahsboard= require('./Routes/Admin')
// authentication Routes
const Authentication = require('./Routes/auth');

// Tasks Routes
const TasksRoutes = require('./Routes/userTasks');

// user Routes
const UserRoutes = require('./Routes/user')

// 404 Route
const NotFoundRoute = require('./Routes/NotFoud');

app.use(cors())
app.use(express.json());

app.use('/auth',Authentication);
app.use('/dashboard',adminDahsboard)
// check if the user is Authenticated first
app.use(IsAuthenticated)

app.use(TasksRoutes);

app.use(UserRoutes);

app.use(NotFoundRoute);

// connecting to the Database
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wtbncmz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
})
app.use(function (error, req, res, next) {
    if (req.statusCode <= 500) {
      res.json({ message: error.message });
    }
    res.status(500).send("Internal server error");
  });