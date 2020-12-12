require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// check jwt token
exports.Auth = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("token", token);
  if (!token) {
    //ini bisa ditambahin res.status(404).redirect("/").json({})
    return res.status(404).json({
      message: "tidak ada token",
    });
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  console.log("decoded", decode);
  req.id = decode.id;
  next();
};

// check jwt token
exports.CheckUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("token", token);
  if (!token) {
    //ini bisa ditambahin res.status(404).redirect("/").json({})
    res.locals.user = null;
    return res.status(404).json({
      message: "tidak ada token",
    });
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  let user = await User.findById(decode.id);
  console.log("user", user);
  res.locals.user = user;
  next();
};
