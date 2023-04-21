const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const {IsAuthenticated} = require('./middleware/IsAuthenticated');


// authentication Routes
const Authentication = require('./Routes/auth');

// Tasks Routes
const TasksRoutes = require('./Routes/userTasks');

// user Routes
const UserRoutes = require('./Routes/user')

// 404 Route
const NotFoundRoute = require('./Routes/NotFoud');


app.use(express.json());

app.use('/auth',Authentication);

// check if the user is Authenticated first
app.use(IsAuthenticated)

app.use(TasksRoutes);

app.use(UserRoutes);

app.use(NotFoundRoute);

// connecting to the Database
mongoose.connect('mongodb+srv://johnsamoel82:9TyQLLc2TELKVZpE@cluster0.wtbncmz.mongodb.net/Tasks-Tracker-app?retryWrites=true&w=majority').then(() => {
    app.listen(3000)
})