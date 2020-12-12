require("dotenv").config();
const User = require("../models/user.model");
const Trx = require("../models/trx-petani-pengumpul.model");
const e = require("express");

exports.CreateTrxPtnPpl = async (req, res) => {
  const user = await User.findById(req.id);
  console.log("user:", user);
  if (user.memberType == "petani") {
    const {
      namaPenerima,
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
      usernamePengirim: user.username,
      usernamePenerima: namaPenerima,
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
      status: "pending",
    });

    trx.save();

    return res.status("201").json({
      message: "transaksi petani-pengumpul berhasil dimasukkan",
      data: trx,
    });
  } else {
    return res.status(404).json({
      message: `anda tidak memiliki akses terhadap fungsi ini, peran anda ${user.memberType}`,
      data: null,
    });
  }
};

exports.getAllByCreatorNamePtn = async (req, res) => {
  const user = await User.findById(req.id);
  if (user.memberType == "petani") {
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

exports.getAllByReceiverNamePpl = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "pengumpul") {
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

exports.getAllUnconfirmedTrxPpl = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "pengumpul") {
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
