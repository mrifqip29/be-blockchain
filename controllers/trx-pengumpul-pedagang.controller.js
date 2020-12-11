require("dotenv").config();
const Trx = require("../models/trx-pengumpul-pedagang.model");
const e = require("express");

exports.CreateTrxPplPdg = async (req, res) => {
  const {
    alamatPengirim,
    alamatPenerima,
    kuantitas,
    harga,
    bawangID,
    tanggalMasuk,
    alamatGudang,
    teknikSorting,
    metodePengemasan,
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
    bawangID: bawangID,
    tanggalMasuk: tanggalMasuk,
    alamatGudang: alamatGudang,
    teknikSorting: teknikSorting,
    metodePengemasan,
    timestamp: Date.now(),
  });

  trx.save();

  return res.status("201").json({
    message: "transaksi pengumpul-pedagang berhasil dimasukkan",
    data: trx,
  });
};
