const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// importing enviroment varaiables
const { HASHING_SALTROUND, JWT_SECRET } = require("../configuration");

// User Model
const User = require("../Models/user");
// validator results
const { validationResult } = require("express-validator");

// Register a new user
const RegisterUser = async (req, res, next) => {
  
  const ValidationValues = validationResult(req);

  try {
    if (!ValidationValues.isEmpty()) {
      return res.status(422).json({ message: ValidationValues.array()[0].msg });
    }

    const { password } = req.body;

    // hashing pasword and create user instant
    const hasedPassword = await bycrypt.hash(
      password,
      parseInt(HASHING_SALTROUND)
    );

    const UserData = new User({ ...req.body, password: hasedPassword  , avatar:req.file&& req.file.path?req.file.path:""});

    // add the new user to the db
    const AddingUserResult = await UserData.save();

    if (AddingUserResult) {
      res.status(201).json({ message: "User was added successfully" });
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    error= new Error(error)

    error.StatusCode=500
    next(error)
    return error
  }
};

// log user in
const Login = async (req, res, next) => {
  const ValidationValues = validationResult(req);
  try {
    // returning errors if any.
    if (!ValidationValues.isEmpty()) {
      return res.status(422).json({ message: ValidationValues.array()[0].msg });
    }

    // creating & returning token
    const token = jwt.sign({ id: req.user._id }, JWT_SECRET);
  res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'none',
    })
    res.send("You are Logged in");

  } catch (error) {

    error= new Error(error)

    error.StatusCode=500
    next(error) 
    return error
  
  }
};

// log user out
const Logout = (req, res) => {
try {
  
  return res
  .clearCookie("jwt")
  .status(200)
  .json({ message: "Successfully logged out " });
} catch (error) {
  error= new Error(error)

    error.StatusCode=500
    next(error)
}
  
};

module.exports = {
  RegisterUser,
  Login,
  Logout,
};
