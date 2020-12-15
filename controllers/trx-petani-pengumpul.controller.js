require("dotenv").config();
const User = require("../models/user.model");
const Trx = require("../models/trx-petani-pengumpul.model");
const e = require("express");

exports.CreateTrxPtnPpl = async (req, res) => {
  const user = await User.findById(req.id);
  console.log("user:", user);

  let transaksiID = "transaksi-" + Math.random().toString(27).substring(4, 8);

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
      batchID,
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
      transaksiID: transaksiID,
      batchID: batchID,
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
    const trx = await Trx.find({ usernamePengirim: user.username });
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
    const trx = await Trx.find({ usernamePenerima: user.username });
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
    const trx = await Trx.find({
      status: "pending",
      usernamePenerima: user.username,
    });
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

exports.getAllConfirmedTrxPpl = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "petani") {
    const trx = await Trx.find({
      status: "confirmed",
      usernamePenerima: user.username,
    });
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

exports.confirmTrxByIDPpl = async (req, res) => {
  const { trxID } = req.body;

  console.log("trxID", trxID);

  const trx = await Trx.findByIdAndUpdate(
    trxID,
    { status: "confirmed" },
    { new: true }
  );
  console.log("trx", trx);
  if (trx) {
    return res.status(200).json({
      message: "transaksi berhasil di konfirmasi",
      data: trx,
    });
  } else {
    return res.status(404).json({
      message: "transaksi tidak berhasil di konfirmasi",
      data: trx,
    });
  }
};
