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
    type: String,
  },
  noNPWP: {
    type: String,
  },
  nik: {
    type: String,
  },
  memberType: {
    type: String,
  },
  luasLahan: {
    type: String,
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
