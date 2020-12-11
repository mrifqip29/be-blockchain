const mongoose = require("mongoose");

const trxPplPdgSchema = new mongoose.Schema({
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
  bawangID: {
    type: String,
  },
  tanggalMasuk: {
    type: String,
  },
  alamatGudang: {
    type: String,
  },
  teknikSorting: {
    type: String,
  },
  metodePengemasan: {
    type: String,
  },
});

module.exports = mongoose.model("TrxPplPdg", trxPplPdgSchema);
