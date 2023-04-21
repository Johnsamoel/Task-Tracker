const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user");
// check if the user authenticated or not.

const IsAuthenticated = async (req, res, next) => {
  try {
    const result = jwt.decode(req.body.token);
    const user = await UserModel.findById({ _id: result.id });
    if (user) {
      req.userId = user.id;
      next();
    } else {
      res.json({ message: "Something went worng" });
    }
  } catch (error) {
    res.json({ message: "You have To Login First" });
  }
};

module.exports = {
  IsAuthenticated,
};
