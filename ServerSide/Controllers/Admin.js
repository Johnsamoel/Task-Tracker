// Task Model
const Task = require("../Models/Task");

// User Model
const User = require("../Models/user");

// Get All users
const GetUsers = async (req, res) => {
  try {
    // fetching all users
    const Users = await User.find();
    // validating the result
    if (Users) {
      res.status(200).json(Users);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(400).json({ message: "something went wrong , Try again" });
  }
};
const GetAllTasks = async (req, res) => {
    const pageNumber=parseInt(req.query.pageNumber)
    const limit=10
    const skipDocumentsNumber= (pageNumber-1)*limit
    try {
      // find Tasks All Tasks
      const Tasks = await Task.find().populate({path:'userId',select:'name avatar'}).limit(limit).skip(skipDocumentsNumber).exec()
      console.log(Tasks)
      // validating the result.
      if (Tasks) {
        res.status(200).json(Tasks);
      } else {
        res.status(400).json({ message: "something went wrong" });
      }
    } catch (error) {
        console.log(error)
      res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });
    }
  };
  module.exports = {
   GetUsers,
   GetAllTasks
  };