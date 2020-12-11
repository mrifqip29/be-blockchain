const mongoose = require("mongoose");

const trxPtnPplSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("TrxPtnPpl", trxPtnPplSchema);
