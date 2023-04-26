const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user");
const { JWT_SECRET } = require("../configuration");
// check if the user authenticated or not.

const IsAuthenticated = async (req, res, next) => {
  try {
    const result = jwt.verify(req.body.token,JWT_SECRET);
   
    const user = await UserModel.findById({ _id: result.id });
    if (user) {
      req.userId = user.id;
      req.user = user
      next();
      return;
    } else {
      res.tatus(400).json({ message: "Something went worng" });
    }
  } catch (error) {
    error = error
    error.StatusCode = 401
    next(error)
    return error;
  }
};

module.exports = {
  IsAuthenticated,
};
