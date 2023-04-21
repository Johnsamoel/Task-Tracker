const mongoose = require("mongoose");

// User Model
const User = require("../Models/user");

// Get All users
const GetUsers = async (req, res) => {
  try {
    // fetching all users
    const Users = await User.find();
    // validating the result
    if (Users) {
      res.json(Users);
    } else {
      res.json({ message: "something went wrong" });
    }
  } catch (error) {
    res.json({ message: "something went wrong , Try again" });
  }
};

// Get users by id
const GetUserById = async (req, res) => {
  try {
    if(!req.body.userId) {
        res.status(404).json({message: "You have to add user id"})
       return;
     }
    // Getting user by id.
    const userData = await User.findById(req.body.userId);

    //validating the result.
    if (userData) {
      res.json(userData);
    } else {
      res.status(404).send({ message: "User was Not Found" });
    }
  } catch (error) {
    res.json({ message: "something went wrong , Try again" });
  }
};

// Delete user
const DeleteUser = async (req, res) => {
  try {
    if(!req.body.userId) {
        res.status(404).json({message: "You have to add user id"})
       return;
     }
    // Delete user by id.
    const result = await User.findByIdAndDelete(req.body.userId);
    // checking deletion result.
    if (result) {
      res.json({ message: "user was deleted successfully" });
    } else {
      res.json({ message: "Something went wrong" });
    }
  } catch (error) {
    res.json({ message: "something went wrong , Try again" });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    if(!req.body.userData) {
        res.status(404).json({message: "You have to add user Object"})
       return;
     }
    // find user and update data.
    const user = await User.findByIdAndUpdate(req.body.userData.id);
    // validating user and setting values to user object
    if (user) {
      for (const key in req.body.userData) {
        if (req.body.userData[key]) user[key] = req.body.userData[key]; // setting the values dynamically
      }

      const updateResult = await user.save();

      if (updateResult) {
        res.json({ message: "item was updated successfully" });
      } else {
        res.status(404).json({message: "something went wrong"});
      }
    } else {
      res.status(404).json({message: "item wasn't found"});
    }
  } catch (error) {
    res.status(404).json({message: 'server Not Responding, Please Try Again'})
  }
};

module.exports = {
  GetUsers,
  GetUserById,
  DeleteUser,
  updateUser,
};
