const express = require('express');
const app = require("./connections");

require('dotenv').config()
const cors = require('cors')
const {IsAuthenticated} = require('./middleware/IsAuthenticated');

//admin routes
const adminDahsboard= require('./Routes/Admin')

// authentication Routes
const Authentication = require('./Routes/auth');

// Tasks Routes
const TasksRoutes = require('./Routes/Tasks');

// user Routes
const UserRoutes = require('./Routes/user')

// 404 Route
const NotFoundRoute = require('./Routes/NotFoud');

app.use(cors())

app.use(express.json());

app.use('/auth',Authentication);


// check if the user is Authenticated first.
app.use(IsAuthenticated)
app.use('/dashboard',adminDahsboard)
app.use(TasksRoutes);

app.use(UserRoutes);

app.use(NotFoundRoute);

<<<<<<< HEAD

app.use((error, req, res, next)=> {
    res.status(error.StatusCode).json({ message: error.message })
  });
=======
// connecting to the Database
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wtbncmz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
})
>>>>>>> ff3f8e03442b218e0fd681913d28eaf984ac63c5
