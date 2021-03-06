const mongoose = require("mongoose");

const trxPtnPplSchema = new mongoose.Schema({
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
  status: {
    type: String,
  },
});

module.exports = mongoose.model("TrxPtnPpl", trxPtnPplSchema);
