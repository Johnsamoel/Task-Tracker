const mongoose = require("mongoose");


const Task = require("../Models/Task");




// Get Task by id
const GetUserTaskById = async (req, res) => {
  try {
    if (!req.body.TaskId) {
      res.status(400).json({ message: "You have to add Task id" })
      return;
    }
    // Getting the task by Taskid.
    const Task = await Task.findById(req.body.TaskId)
    // validating the result based on fetching response.
    if (Task) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "Task Not Found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

// Add Task
const AddTask = async (req, res) => {
  try {
    if (!req.body.Task) {
      res.status(404).json({ message: "You have to add Task Object" });
      return;
    }
    // creating new Task obj based on Task schema
    const Taskobj = new Task(req.body.Task);

    // adding user Id Reference to the Task.
    Taskobj.userId = new mongoose.Types.ObjectId(req.userId);

    // adding the Task to The Database.
    const result = await Taskobj.save();
    if (result) {
      res.status(201).json({ message: "Item was added successfully" });
    } else {
      res.status(404).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

// Delete Task
const DeleteTask = async (req, res) => {
  try {
    if (!req.body.TaskId) {
      res.status(400).json({ message: "You have to add Task ID" })
      return;
    }
    // Find Task by ID.
    const Task = await Task.findByIdAndDelete(req.body.TaskId);
    // validating the result
    if (Task) {
      res.status(200).json({ message: "Item was deleted successfully" });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

//Update Task
const updateTask = async (req, res) => {
  try {
    if (!req.body.Task) {
      res.status(404).json({ message: "You have to add Task Object" })
      return;
    }

    // finding Task by id.
    const TaskObj = await Task.findByIdAndUpdate(req.body.Task.id).exec()

    if (TaskObj) {
      for (const key in req.body.Task) {
        if (req.body.Task[key]) TaskObj[key] = req.body.Task[key]; // setting the values dynamically
      }
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
    res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

module.exports = {
  AddTask,
  GetUserTaskById,
  DeleteTask,
  updateTask,
};
