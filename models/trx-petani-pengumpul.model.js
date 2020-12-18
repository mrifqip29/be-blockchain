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
    type: String,
  },
  harga: {
    type: String,
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
  produktivitas: {
    type: String,
  },
  status: {
    type: String,
  },
  transaksiID: {
    type: String,
  },
  batchID: {
    type: String,
  },
});

module.exports = mongoose.model("TrxPtnPpl", trxPtnPplSchema);
