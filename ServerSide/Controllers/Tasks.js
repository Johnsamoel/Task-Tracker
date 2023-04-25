const mongoose = require("mongoose");

// user and Task models
const Task = require("../Models/Task");
const User = require('../Models/user');

// importing the validator
const { validationResult } = require('express-validator')

// Delete Related files fn.
const {DeleteFileByPath} = require('../Utils/DeleteFile')


// Get Task by id
const GetTaskById = async (req, res, next) => {
  try {

    if (!req.params.TaskId) {
      res.status(400).json({ message: "You have to add Task id" })
      return;
    }

    // Getting the task by Taskid.
    const TaskResult = await Task.findById(req.params.TaskId)

    // validating the result based on fetching response.
    if (TaskResult) {
      res.status(200).json(TaskResult);
    } else {
      res.status(400).json({ message: "Task Not Found" });
    }
  } catch (error) {
    error.message=error.message
    error.StatusCode=500
    next(error)
  }
};

// Add Task
const AddTask = async (req, res, next) => {
  const validationvalues = validationResult(req);
  try {
    // sending errors if any
    if (!validationvalues.isEmpty()) {
      return res.status(422).json({ message: validationvalues.array()[0].msg });
    }

    // creating new Task obj based on Task schema
    const Taskobj = new Task({...req.body.Task , image: req.file && req.file.path ? req.file.path : '' });

    // adding user Id Reference to the Task.
    Taskobj.userId = new mongoose.Types.ObjectId(req.userId);

    // adding the Task to The Database.
    const result = await Taskobj.save();

    if (result) {

      // updating task ids per user in db by fetching the user and the last task id.
      const resultOfUpdatingUser = await User.findByIdAndUpdate({_id: req.userId} , { tasks: [...req.user.tasks , result._id ] }).exec()

     if(resultOfUpdatingUser)  res.status(201).json({ message: "Item was added successfully" , Item: result });

    } else {
      res.status(404).json({ message: "something went wrong" });
    }
  } catch (error) {
    error.message=error.message
    error.StatusCode=500
    next(error)
  }
};

// Delete Task
const DeleteTask = async (req, res,next) => {
  try {
    if (!req.params.TaskId) {
      res.status(400).json({ message: "You have to add Task ID" })
      return;
    }

    // Find Task by ID.
    const TaskFindingResult = await Task.findByIdAndDelete(req.params.TaskId)

    //  delete task related image if any.
    if(TaskFindingResult.image) {
      DeleteFileByPath(TaskFindingResult.image);
    }

    // validating the result
    if (TaskFindingResult) {

    const updateUserDataResult =await User.find({ tasks: { $eq:req.params.TaskId  } }).updateMany({$pull: { tasks: req.params.TaskId }}).exec()

     if(updateUserDataResult) res.status(200).json({ message: "Item was deleted successfully" });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    error.message=error.message
    error.StatusCode=500
    next(error)
  }
};

//Update Task
const updateTask = async (req, res, next) => {

  try {

    if(Object.values(req.body.Task).every((item) => item === "" )){
      return res.status(400).json({message: 'Bad Request'})
    }

    const validationvalues = validationResult(req);

    // sending errors if any
    if (!validationvalues.isEmpty()) {
      return res.status(422).json({ message: validationvalues.array()[0].msg });
    }

    // finding Task by id.
    const TaskObj = await Task.findByIdAndUpdate(req.params.TaskId).exec();

    // delete task old image if there's a new one
    if(req.file && req.file.path && TaskObj.image) {
      DeleteFileByPath(TaskObj.image);
    }

    if (TaskObj) {
      for (let key in req.body.Task) {
        if (req.body.Task[key]) TaskObj[key] = req.body.Task[key]; // setting the values dynamically
      }
      
      // keeping the same value in case there is no updated one provided
      TaskObj.image = req.file && req.file.path ? req.file.path : TaskObj.image

      // saving update into db.
      const UpdatingResult = await TaskObj.save();

      if (UpdatingResult) {
        res.status(200).json({ message: "item was updated successfully" });
      } else {
        res.status(400).json({ message: "something went wrong" });
      }

      } else {
        res.status(404).json({ message: "item wasn't found" });
      }
  } catch (error) {
    error.message= error.message
    error.StatusCode=500
    next(error)
  }
};

module.exports = {
  AddTask,
  GetTaskById,
  DeleteTask,
  updateTask,
};
