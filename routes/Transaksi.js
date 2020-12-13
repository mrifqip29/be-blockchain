const express = require("express");
const router = express.Router();
const {
  CreateTrxPkrPtn,
  getAllByCreatorNamePkr,
  getAllByReceiverNamePtn,
  getAllUnconfirmedTrxPtn,
  getAllConfirmedTrxPtn,
  confirmTrxByIDPtn,
} = require("../controllers/trx-penangkar-petani.controller");
const {
  CreateTrxPtnPpl,
  getAllByCreatorNamePtn,
  getAllByReceiverNamePpl,
  getAllUnconfirmedTrxPpl,
  getAllConfirmedTrxPpl,
  confirmTrxByIDPpl,
} = require("../controllers/trx-petani-pengumpul.controller");
const {
  CreateTrxPplPdg,
  getAllByCreatorNamePpl,
  getAllByReceiverNamePdg,
  getAllUnconfirmedTrxPdg,
  getAllConfirmedTrxPdg,
  confirmTrxByIDPdg,
} = require("../controllers/trx-pengumpul-pedagang.controller");
const { Auth, CheckUser } = require("../middleware/middleware");

router.post("/pkr-ptn", Auth, CreateTrxPkrPtn);
router.post("/ptn-ppl", Auth, CreateTrxPtnPpl);
router.post("/ppl-pdg", Auth, CreateTrxPplPdg);

router.get("*", CheckUser);

router.get("/pkr-ptn/creator", Auth, getAllByCreatorNamePkr);
router.get("/ptn-ppl/creator", Auth, getAllByCreatorNamePtn);
router.get("/ppl-pdg/creator", Auth, getAllByCreatorNamePpl);

router.get("/pkr-ptn/receiver", Auth, getAllByReceiverNamePtn);
router.get("/ptn-ppl/receiver", Auth, getAllByReceiverNamePpl);
router.get("/ppl-pdg/receiver", Auth, getAllByReceiverNamePdg);

router.get("/pkr-ptn/unconfirmed", Auth, getAllUnconfirmedTrxPtn);
router.get("/ptn-ppl/unconfirmed", Auth, getAllUnconfirmedTrxPpl);
router.get("/ppl-pdg/unconfirmed", Auth, getAllUnconfirmedTrxPdg);

router.get("/pkr-ptn/confirm", Auth, getAllConfirmedTrxPtn);
router.get("/ptn-ppl/confirm", Auth, getAllConfirmedTrxPpl);
router.get("/ppl-pdg/confirm", Auth, getAllConfirmedTrxPdg);

// giamna caranya pake id
router.post("/pkr-ptn/confirm", Auth, confirmTrxByIDPtn);
router.post("/ptn-ppl/confirm", Auth, confirmTrxByIDPpl);
router.post("/ppl-pdg/confirm", Auth, confirmTrxByIDPdg);

module.exports = router;
