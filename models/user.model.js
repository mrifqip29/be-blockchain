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
    type: Int32Array,
  },
  noNPWP: {
    type: Int32Array,
  },
  nik: {
    type: Int32Array,
  },
  memberType: {
    type: String,
  },
  luasLahan: {
    type: Int32Array,
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
