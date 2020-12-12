require("dotenv").config();
const User = require("../models/user.model");
const Trx = require("../models/trx-penangkar-petani.model");
const e = require("express");

exports.CreateTrxPkrPtn = async (req, res) => {
  const user = await User.findById(req.id);
  console.log("user:", user);
  if (user.memberType == "penangkar") {
    const {
      namaPenerima,
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
      usernamePengirim: user.username,
      usernamePenerima: namaPenerima,
      alamatPengirim: alamatPengirim,
      alamatPenerima: alamatPenerima,
      kuantitas: kuantitas,
      harga: harga,
      umurBenih: umurBenih,
      lamaPenyimpanan: lamaPenyimpanan,
      varietas: varietas,
      hargaBenih: hargaBenih,
      timestamp: Date.now(),
      status: "pending",
    });

    trx.save();

    return res.status("201").json({
      message: "transaksi penangkar-petani berhasil dimasukkan",
      data: trx,
    });
  } else {
    return res.status(404).json({
      message: `anda tidak memiliki akses terhadap fungsi ini, peran anda ${user.memberType}`,
      data: null,
    });
  }
};

exports.getAllByCreatorNamePkr = async (req, res) => {
  const user = await User.findById(req.id);
  if (user.memberType == "penangkar") {
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
      data: null,
    });
  }
};

exports.getAllByReceiverNamePtn = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "petani") {
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

exports.getAllUnconfirmedTrxPtn = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "petani") {
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
