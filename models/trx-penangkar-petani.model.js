const mongoose = require("mongoose");

const trxPkrPtnSchema = new mongoose.Schema({
  usernamePengirim: {
    type: String,
  },
  usernamePenerima: {
    type: String,
  },
  alamatPengirim: {
    type: String,
  },
  alamatPenerima: {
    type: String,
  },
  kuantitas: {
    type: Number,
  },
  harga: {
    type: Number,
  },
  timestamp: {
    type: Date,
  },
  umurBenih: {
    type: String,
  },
  lamaPenyimpanan: {
    type: String,
  },
  varietas: {
    type: String,
  },
  hargaBenih: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("TrxPkrPtn", trxPkrPtnSchema);
