// User & Task Model
const User = require("../Models/user");
const Task = require("../Models/Task");


// validator results
const { validationResult } = require("express-validator");

// delete File by path Fn
const { DeleteFileByPath } = require('../Utils/DeleteFile');
const mongoose = require("mongoose");

// Get users by id
const GetUserById = async (req, res, next) => {
  try {
    if (!req.params.userId) {
      res.status(400).json({ message: "You have to add user id" })
      return;
    }
    // Getting user by id.
    const userData = await User.findById(req.params.userId).exec()
    console.log(userData , "user data is here")
    //validating the result.
    if (userData) {
      console.log(userData , 'final data result')
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: "User was Not Found" });
    }
  } catch (error) {
    error= new Error(error)
    error.StatusCode=500
    next(error)
  }
};

// Delete user
const DeleteUser = async (req, res, next) => {

  try {
    
    if (!req.params.userId) {
      res.status(404).json({ message: "You have to add user id" })
      return;
    }
    
    // Delete user by id.
    const result = await User.findByIdAndDelete(req.params.userId).exec();

    // delete related files first.
    if(result.avatar) {
      DeleteFileByPath(result.avatar);
    }

    // checking deletion result.
    if (result) {
      const result =await Task.find({ userId: { $eq:req.params.userId  } }).updateMany({$pull: { userId: req.params.userId }}).exec()
      res.status(200).json({ message: "user was deleted successfully" });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    error= new Error(error)
    error.StatusCode=500
    next(error)
  }
};

// update user
const updateUser = async (req, res, next) => {
  
  try {

    if(Object.values(req.body.userData).every((item) => item === "" )){
      return res.status(400).json({message: 'Bad Request'})
    }
    
    const validationvalues = validationResult(req);

    // sending errors if any
    if (!validationvalues.isEmpty()) {
      return res.status(422).json({ message: validationvalues.array()[0].msg });
    }
    

    // find user and update data.
    const userObj = await User.findByIdAndUpdate(req.params.userId).exec()

    // deleting user related files
    if(req.file && req.file.path && userObj.avatar){
      DeleteFileByPath(userObj.avatar)
    }

    // validating user and setting values to user object
    if (userObj) {

      for (let key in req.body.userData) {
        if (req.body.userData[key] ) userObj[key] = req.body.userData[key]; // setting the values dynamically
        if(key === "password") continue;
      }    

      // keeping the same value in case there is no updated one provided
      userObj.avatar = req.file && req.file.path ? req.file.path : userObj.avatar

      const updateResult = await userObj.save();
      if (updateResult) {
       res.status(200).json({ message: "item was updated successfully" });
       
      } else {
        res.status(404).json({ message: "something went wrong" });
      }
      
    } else {
        res.status(404).json({ message: "item wasn't found" });
    }
    return userObj;
  } catch (error) {
    error= new Error(error)
    error.StatusCode=500
    
    next(error)
    return error
  }
};

const getUserTasks = async (req, res, next) => {
  const pageNumber=parseInt(req.query.pageNumber)
    const limit=10
    const skipDocumentsNumber= (pageNumber-1)*limit
  try {
    const userId = req.params.userId
    if (!userId) {
      res.status(400).json("User is not found")
    }
    const userTasks = await User.findById(userId).populate('tasks').limit(limit).skip(skipDocumentsNumber).exec()
    if(userTasks){
      res.status(200).json({tasks:userTasks.tasks,totalPages:userTasks.tasks.length/limit<=1?1:userTasks.tasks.length/limit})
    }else{
      res.status(400).json("Something went wrong")
    }
    
  } catch (error) {
    error= new Error(error)
    error.StatusCode=500
    next(error)

  }
}
module.exports = {
  GetUserById,
  DeleteUser,
  updateUser,
  getUserTasks
};
