require("dotenv").config();
const User = require("../models/user.model");
const Trx = require("../models/trx-pengumpul-pedagang.model");
const e = require("express");

exports.CreateTrxPplPdg = async (req, res) => {
  const user = await User.findById(req.id);
  console.log("user:", user);
  if (user.memberType == "pengumpul") {
    const {
      namaPenerima,
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
      usernamePengirim: user.username,
      usernamePenerima: namaPenerima,
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
      status: "pending",
    });

    trx.save();

    return res.status("201").json({
      message: "transaksi pengumpul-pedagang berhasil dimasukkan",
      data: trx,
    });
  } else {
    return res.status(404).json({
      message: `anda tidak memiliki akses terhadap fungsi ini, peran anda ${user.memberType}`,
      data: null,
    });
  }
};

exports.getAllByCreatorNamePpl = async (req, res) => {
  const user = await User.findById(req.id);
  if (user.memberType == "pedagang") {
    const trx = await Trx.findOne({ createdBy: user.username });
    console.log("transaksi:", trx);
    if (trx) {
      return res.status(200).json({
        message: "transaksi berhasil di panggil",
        data: trx,
      });
    } else {
      return res.status(404).json({
        message: "transaksi tidak ditemukan",
        data: trx,
      });
    }
  } else {
    return res.status(404).json({
      message: `anda tidak memiliki akses terhadap fungsi ini, peran anda ${user.memberType}`,
      data: trx,
    });
  }
};

exports.getAllByReceiverNamePdg = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "pedagang") {
    const trx = await Trx.findOne({ namaPenerima: user.username });
    console.log("transaksi:", trx);
    if (trx) {
      return res.status(200).json({
        message: "transaksi berhasil di panggil",
        data: trx,
      });
    } else {
      return res.status(404).json({
        message: "transaksi tidak ditemukan",
        data: trx,
      });
    }
  } else {
    return res.status(404).json({
      message: `anda tidak memiliki akses terhadap fungsi ini, peran anda ${user.memberType}`,
      data: null,
    });
  }
};

exports.getAllUnconfirmedTrxPdg = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "pedagang") {
    const trx = await Trx.find({ status: "pending" });
    console.log("transaksi:", trx);
    if (trx) {
      return res.status(200).json({
        message: "transaksi berhasil di panggil",
        data: trx,
      });
    } else {
      return res.status(404).json({
        message: "transaksi tidak ditemukan",
        data: trx,
      });
    }
  } else {
    return res.status(404).json({
      message: `anda tidak memiliki akses terhadap fungsi ini, peran anda ${user.memberType}`,
      data: null,
    });
  }
};
