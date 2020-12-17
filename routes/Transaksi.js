const express = require("express");
const router = express.Router();
const {
  CreateTrxPkrPtn,
  getAllByCreatorNamePkr,
  getAllByReceiverNamePtn,
  getAllUnconfirmedTrxPkrSent,
  getAllConfirmedTrxPkrSent,
  getAllUnconfirmedTrxPtnInbox,
  getAllConfirmedTrxPtnInbox,
  confirmTrxByIDPtn,
} = require("../controllers/trx-penangkar-petani.controller");
const {
  CreateTrxPtnPpl,
  getAllByCreatorNamePtn,
  getAllByReceiverNamePpl,
  getAllUnconfirmedTrxPtnSent,
  getAllConfirmedTrxPtnSent,
  getAllUnconfirmedTrxPplInbox,
  getAllConfirmedTrxPplInbox,
  confirmTrxByIDPpl,
} = require("../controllers/trx-petani-pengumpul.controller");
const {
  CreateTrxPplPdg,
  getAllByCreatorNamePpl,
  getAllByReceiverNamePdg,
  getAllUnconfirmedTrxPplSent,
  getAllConfirmedTrxPplSent,
  getAllUnconfirmedTrxPdgInbox,
  getAllConfirmedTrxPdgInbox,
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

router.get("/pkr/unconfirmed/sent", Auth, getAllUnconfirmedTrxPkrSent);
router.get("/ptn/unconfirmed/sent", Auth, getAllUnconfirmedTrxPtnSent);
router.get("/ppl/unconfirmed/sent", Auth, getAllUnconfirmedTrxPplSent);

router.get("/pkr/confirmed/sent", Auth, getAllConfirmedTrxPkrSent);
router.get("/ptn/confirmed/sent", Auth, getAllConfirmedTrxPtnSent);
router.get("/ppl/confirmed/sent", Auth, getAllConfirmedTrxPplSent);

router.get("/ptn/unconfirmed/inbox", Auth, getAllUnconfirmedTrxPtnInbox);
router.get("/ppl/unconfirmed/inbox", Auth, getAllUnconfirmedTrxPplInbox);
router.get("/pdg/unconfirmed/inbox", Auth, getAllUnconfirmedTrxPdgInbox);

router.get("/ptn/confirmed/inbox", Auth, getAllConfirmedTrxPtnInbox);
router.get("/ppl/confirmed/inbox", Auth, getAllConfirmedTrxPplInbox);
router.get("/pdg/confirmed/inbox", Auth, getAllConfirmedTrxPdgInbox);

router.post("/pkr-ptn/confirm", Auth, confirmTrxByIDPtn);
router.post("/ptn-ppl/confirm", Auth, confirmTrxByIDPpl);
router.post("/ppl-pdg/confirm", Auth, confirmTrxByIDPdg);

module.exports = router;
