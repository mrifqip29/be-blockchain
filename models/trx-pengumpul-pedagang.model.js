const mongoose = require("mongoose");

const trxPplPdgSchema = new mongoose.Schema({
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

module.exports = mongoose.model("TrxPplPdg", trxPplPdgSchema);
