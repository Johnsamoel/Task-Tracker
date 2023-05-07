// Task Model
const Task = require("../Models/Task");

// User Model
const User = require("../Models/user");

// Get All users
const GetUsers = async (req, res, next) => {

    const pageNumber=parseInt(req.query.pageNumber)
    const limit=10
    const skipDocumentsNumber= (pageNumber-1)*limit

  try {
    // fetching all users
    const Users = await User.find().limit(limit).skip(skipDocumentsNumber).exec()
    // validating the result
    if (Users) {
      res.status(200).json({users:Users, totalPages:Users.length/limit<=1?1:Users.length/limit<1});
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    error= new Error(error)

    error.StatusCode=500
    next(error)  }
};

// Get all Tasks
const GetAllTasks = async (req, res, next) => {

    const pageNumber=parseInt(req.query.pageNumber)
    const limit=10
    const skipDocumentsNumber= (pageNumber-1)*limit
    
    try {
      // find Tasks All Tasks
      const Tasks = await Task.find().populate({path:'userId',select:'name avatar'}).limit(limit).skip(skipDocumentsNumber).exec()
      // validating the result.
      if (Tasks) {
        res.status(200).json({tasks:Tasks, totalPages:Tasks.length/limit<=1?1:Tasks.length/limit});
      } else {
        res.status(400).json({ message: "something went wrong" });
      }
    } catch (error) {
      error = error

      error.StatusCode=500
      next(error)
    }
  };
  module.exports = {
   GetUsers,
   GetAllTasks
  };