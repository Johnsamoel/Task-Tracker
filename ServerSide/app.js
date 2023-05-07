const express = require('express');
const cookieParser = require('cookie-parser')
const app = require("./connections");

// importing path module
const path = require('path');

// importing cors to specify which site to serve
const cors = require('cors')

// auth middlware to check the user Authentication
const {IsAuthenticated} = require('./middleware/IsAuthenticated');

// to user variable which are stored in .env file
require('dotenv').config()

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
app.use(cookieParser());

// cors to specify which site to serve
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
// parsing json data
app.use(express.json());

//static surfing
app.use( express.static(path.join(__dirname , 'Public/Avatars')) )

// authentications routes
app.use('/auth',Authentication);

// check if the user is Authenticated first.


app.use('/dashboard',adminDahsboard)

app.use(TasksRoutes);

app.use(UserRoutes);

app.use(NotFoundRoute);


app.use((error, req, res, next)=> {
    res.status(error.StatusCode || 404).json({ message: error.message })
  });
