require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("auth");
  console.log(token);
  if (!token) {
    return res.status(404).json({
      message: "tidak ada token",
    });
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.id = decode.id;

  next();
};
