require("dotenv").config();
const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const e = require("express");

exports.DaftarUser = async (req, res) => {
  const {
    nama,
    noHP,
    username,
    password,
    ttl,
    noKK,
    noNPWP,
    nik,
    memberType,
    memberInfo,
    luasLahan,
    alamatToko,
    alamatLahan,
    kelompokTani,
  } = req.body;

  let usernameDB = await User.findOne({ username: username });

  if (usernameDB) {
    return res.status(404).json({
      status: false,
      message: "username sudah digunakan",
    });
  }

  const hashed = await bcryptjs.hash(password, 10);

  if (!kelompokTani) {
    kelompokTani = "";
  }

  const user = new User({
    nama: nama,
    noHp: noHP,
    username: username,
    password: hashed,
    ttl: ttl,
    noKK: noKK,
    noNPWP: noNPWP,
    nik: nik,
    memberType: memberType,
    luasLahan: luasLahan,
    alamatToko: alamatToko,
    alamatLahan: alamatLahan,
    kelompokTani: kelompokTani,
  });

  user.save();

  return res.status("201").json({
    message: "user berhasil didaftarkan",
    data: user,
  });
};

exports.LoginUSer = async (req, res) => {
  const { username, password } = req.body;

  const userDB = await User.findOne({ username: username });
  if (userDB) {
    const passwordDB = await bcryptjs.compare(password, userDB.password);
    if (passwordDB) {
      const data = {
        id: userDB._id,
      };
      const token = await jwt.sign(data, process.env.JWT_SECRET);
      return res.status(200).json({
        message: `${userDB.username} berhasil login`,
        token: token,
      });
    } else {
      return res.status(404).json({
        message: "username atau password tidak cocok",
      });
    }
  } else {
    return res.status(404).json({
      message: "username atau password tidak cocok",
    });
  }
};

exports.getSingleUser = async (req, res) => {
  console.log(req.id);
  const user = await User.findById(req.id);
  return res.status(200).json({
    message: "berhasil di panggil",
    data: user,
  });
};
