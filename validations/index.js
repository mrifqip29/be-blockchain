const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: err.array()[0].msg,
    });
  }
  next();
};

exports.validationDaftar = [
  check("nama", "nama tidak boleh kosong").notEmpty(),
  check("username", "username tidak boleh kosong").notEmpty(),
  check("password", "password tidak boleh kosong")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("password minimal 6 karakter"),
  check("ttl", "ttl tidak boleh kosong").notEmpty(),
  check("noKK", "noKK tidak boleh kosong").notEmpty(),
  check("noNPWP", "noNPWP tidak boleh kosong").notEmpty(),
  check("nik", "NIK tidak boleh kosong").notEmpty(),
];

exports.validationLogin = [
  check("username", "username tidak boleh kosong").notEmpty(),
  check("password", "password tidak boleh kosong").notEmpty(),
];
