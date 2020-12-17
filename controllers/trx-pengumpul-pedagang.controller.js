require("dotenv").config();
const User = require("../models/user.model");
const Trx = require("../models/trx-pengumpul-pedagang.model");
const e = require("express");

exports.CreateTrxPplPdg = async (req, res) => {
  const user = await User.findById(req.id);
  console.log("user:", user);

  let transaksiID = "transaksi-" + Math.random().toString(27).substring(4, 8);

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
      bawangID: bawangID,
      tanggalMasuk: tanggalMasuk,
      alamatGudang: alamatGudang,
      teknikSorting: teknikSorting,
      metodePengemasan,
      timestamp: Date.now(),
      status: "pending",
      transaksiID: transaksiID,
      batchID: batchID,
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
    const trx = await Trx.find({ usernamePengirim: user.username }).limit(10);
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
    const trx = await Trx.find({ usernamePenerima: user.username }).limit(10);
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
    const trx = await Trx.find({
      status: "pending",
      usernamePenerima: user.username,
    }).limit(10);
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

exports.getAllConfirmedTrxPdg = async (req, res) => {
  const user = await User.findById(req.id);

  if (user.memberType == "petani") {
    const trx = await Trx.find({
      status: "confirmed",
      usernamePenerima: user.username,
    }).limit(10);
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

exports.confirmTrxByIDPdg = async (req, res) => {
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
