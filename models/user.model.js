const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
  },
  nomorHP: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  ttl: {
    type: String,
  },
  noKK: {
    type: Number,
  },
  noNPWP: {
    type: Number,
  },
  nik: {
    type: Number,
  },
  memberType: {
    type: String,
  },
  luasLahan: {
    type: Number,
  },
  alamatToko: {
    type: String,
  },
  alamatLahan: {
    type: String,
  },
  kelompokTani: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
