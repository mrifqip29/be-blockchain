require("dotenv").config();
const Trx = require("../models/trx-petani-pengumpul.model");
const e = require("express");

exports.CreateTrxPtnPpl = async (req, res) => {
  const {
    alamatPengirim,
    alamatPenerima,
    kuantitas,
    harga,
    ukuranBenih,
    kadarAir,
    pupuk,
    pestisida,
    perlakuan,
  } = req.body;

  // for(let obj in req.body) {
  //   if(req.body[obj]=="" || null) {

  //   }
  // }

  const trx = new Trx({
    alamatPengirim: alamatPengirim,
    alamatPenerima: alamatPenerima,
    kuantitas: kuantitas,
    harga: harga,
    ukuranBenih: ukuranBenih,
    kadarAir: kadarAir,
    pupuk: pupuk,
    pestisida: pestisida,
    perlakuan: perlakuan,
    timestamp: Date.now(),
  });

  trx.save();

  return res.status("201").json({
    message: "transaksi petani-pengumpul berhasil dimasukkan",
    data: trx,
  });
};
