const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../Models/user");

// Register a new user
const RegisterUser = async (req, res) => {
  try {
    // validating Request payload
    if (!req.body.userData) {
      res.status(404).json({ message: "You have to add User Data" });
      return;
    }
    const { email } = req.body.userData;
    // check if the user already exists
    const userData = await User.findOne({ email: email });

    if (userData) {
      res.json("The email Already Exists");
      return;
    }
    // hashing pasword and create user instant
    const hasedPassword = await bycrypt.hash(req.body.password, 12);
    const UserData = new User({ ...req.body, password: hasedPassword });
    // add the new user to the db
    const AddingUserResult = await UserData.save();

    if (AddingUserResult) {
      res.json({ message: "User was added successfully"});
    } else {
      res.status(404).json({ message :"something went wrong"});
    }
  } catch (error) {
    res.json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

// log user in
const Login = async (req, res) => {
  try {
    // validating Request payload
    if (!req.body.email || !req.body.password) {
      res.status(404).json({ message: "You have to add User Credentials" });
      return;
    }
    const { email, password } = req.body;
    // find user by email
    const userObj = await User.findOne({ email: email });

    if (userObj) {
        //validate user password
      const isValidPassword = await bycrypt.compare(password, userObj.password);

      if (isValidPassword) {
        // creating & returning token 
        const token = jwt.sign({ id: userObj._id }, "UserSecretKeyToken");
        res.json({ token });
        return;
      } else {
        res.json({ message :"invalid data!!"});
        return;
      }
    }else {
    res.status(404).json({ message : "invalid user data"});
    }

  } catch (error) {
    res.json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

// log user out
const Logout = (req, res) => {};

module.exports = {
  RegisterUser,
  Login,
  Logout,
};
