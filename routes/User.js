const express = require("express");
const router = express.Router();
const {
  DaftarUser,
  LoginUSer,
  getSingleUser,
} = require("../controllers/user.controller");
const {
  runValidation,
  validationDaftar,
  validationLogin,
} = require("../validations");
const middleware = require("../middleware/middleware");

router.post("/daftar", validationDaftar, runValidation, DaftarUser);
router.post("/login", validationLogin, runValidation, LoginUSer);
router.get("/user", middleware, getSingleUser);

module.exports = router;
