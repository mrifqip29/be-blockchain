const mongoose = require("mongoose");

const trxPkrPtnSchema = new mongoose.Schema({
  alamatPengirim: {
    type: String,
  },
  alamatPengirim: {
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
  ukuranUmbi: {
    type: String,
  },
  kadarAir: {
    type: String,
  },
  pupuk: {
    type: String,
  },
  pestisida: {
    type: String,
  },
  perlakuan: {
    type: String,
  },
});

module.exports = mongoose.model("TrxPkrPtn", trxPkrPtnSchema);
