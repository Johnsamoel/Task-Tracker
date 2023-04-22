const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { HASHING_SALTROUND,JWT_SECRET } = require("../configuration");
// User Model
const User = require("../Models/user");

// Register a new user
const RegisterUser = async (req, res) => {
  try {
    // validating Request payload
    if (!req.body) {
      res.status(400).json({ message: "You have to add User Data" });
      return;
    }
    const { email,password } = req.body;
    // check if the user already exists
    const userData = await User.findOne({ email: email });

    if (userData) {
      res.status(400).json("The email Already Exists");
      return;
    }
    // hashing pasword and create user instant
    const hasedPassword = await bycrypt.hash(password,parseInt(HASHING_SALTROUND) );
    const UserData = new User({ ...req.body, password: hasedPassword});
    // add the new user to the db
    const AddingUserResult = await UserData.save();

    if (AddingUserResult) {
      res.status(201).json({ message: "User was added successfully"});
    } else {
      res.status(400).json({ message :"something went wrong"});
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

// log user in
const Login = async (req, res) => {
  try {
    // validating Request payload
    if (!req.body.email || !req.body.password) {
      res.status(400).json({ message: "You have to add User Credentials" });
      return;
    }
    
    // if(req.body.email.match)
    const { email, password } = req.body;
    // find user by email
    const userObj = await User.findOne({ email: email });

    if (userObj) {
        //validate user password
      const isValidPassword = await bycrypt.compare(password, userObj.password);

      if (isValidPassword) {
        // creating & returning token 
        const token = jwt.sign({ id: userObj._id }, JWT_SECRET);
        res.status(200).json({ token });
        return;
      } else {
        res.status(400).json({ message :"invalid data!!"});
        return;
      }
    }else {
    res.status(404).json({ message : "invalid user data"});
    }

  } catch (error) {
    res.status(400).json({ message: "Server Is Not Responding, Please Try Again Later." });
  }
};

// log user out
const Logout = (req, res) => {};

module.exports = {
  RegisterUser,
  Login,
  Logout,
};
