const express = require("express");
const router = express.Router();
const {
  DaftarUser,
  LoginUser,
  getSingleUser,
  LogoutUser,
} = require("../controllers/user.controller");
const {
  runValidation,
  validationDaftar,
  validationLogin,
} = require("../validations");
const { Auth } = require("../middleware/middleware");

router.post("/daftar", validationDaftar, runValidation, DaftarUser);
router.post("/login", validationLogin, runValidation, LoginUser);
router.get("/logout", LogoutUser);
router.get("/user", Auth, getSingleUser);

module.exports = router;
