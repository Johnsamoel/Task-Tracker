
// User Model
const User = require("../Models/user");
const Task = require("../Models/Task");

// Get All users


// Get users by id
const GetUserById = async (req, res) => {
  try {
    if (!req.body.userId) {
      res.status(400).json({ message: "You have to add user id" })
      return;
    }
    // Getting user by id.
    const userData = await User.findById(req.body.userId).exec()

    //validating the result.
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).send({ message: "User was Not Found" });
    }
  } catch (error) {
    res.status(400).json({ message: "something went wrong , Try again" });
  }
};

// Delete user
const DeleteUser = async (req, res) => {

  try {
    if (!req.body.userId) {
      res.status(404).json({ message: "You have to add user id" })
      return;
    }
    // Delete user by id.
    const result = await User.findByIdAndDelete(req.body.userId).exec()
    // checking deletion result.
    if (result) {
      const result =await Task.find({ userId: { $eq:req.body.userId  } }).updateMany({$pull: { userId: req.body.userId }}).exec()
      res.status(200).json({ message: "user was deleted successfully" });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "something went wrong , Try again" });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    if (!req.body.userData) {
      res.status(404).json({ message: "You have to add user Object" })
      return;
    }
    // find user and update data.
    const user = await User.findByIdAndUpdate(req.body.userData.id).exec()
    // validating user and setting values to user object
    if (user) {
      for (const key in req.body.userData) {
        if (req.body.userData[key]) user[key] = req.body.userData[key]; // setting the values dynamically
      }

      const updateResult = await user.save();

      if (updateResult) {
        res.status(200).json({ message: "item was updated successfully" });
      } else {
        res.status(404).json({ message: "something went wrong" });
      }
    } else {
      res.status(404).json({ message: "item wasn't found" });
    }
  } catch (error) {
    res.status(404).json({ message: 'server Not Responding, Please Try Again' })
  }
};
const getUserTasks = async (req, res) => {
  const pageNumber=parseInt(req.query.pageNumber)
    const limit=10
    const skipDocumentsNumber= (pageNumber-1)*limit
  try {
    const userId = req.body.userId
    if (!userId) {
      res.status(400).json("User is not found")
    }
    const userTasks = await User.findById(userId).populate('tasks').limit(limit).skip(skipDocumentsNumber).exec()
    if(userTasks){
      res.status(200).json(userTasks.tasks)
    }else{
      res.status(400).json("Something went wrong")
    }
    
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });

  }
}
module.exports = {
  GetUserById,
  DeleteUser,
  updateUser,
  getUserTasks
};
