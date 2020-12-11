require("dotenv").config();
const Trx = require("../models/trx-penangkar-petani.model");
const e = require("express");

exports.CreateTrxPkrPtn = (req, res) => {
  const {
    alamatPengirim,
    alamatPenerima,
    kuantitas,
    harga,
    umurBenih,
    lamaPenyimpanan,
    varietas,
    hargaBenih,
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
    umurBenih: umurBenih,
    lamaPenyimpanan: lamaPenyimpanan,
    varietas: varietas,
    hargaBenih: hargaBenih,
    timestamp: Date.now(),
  });

  trx.save();

  return res.status("201").json({
    message: "transaksi penangkar-petani berhasil dimasukkan",
    data: trx,
  });
};
