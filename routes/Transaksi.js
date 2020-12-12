const express = require("express");
const router = express.Router();
const {
  CreateTrxPkrPtn,
  getAllByCreatorNamePkr,
  getAllByReceiverNamePtn,
  getAllUnconfirmedTrxPtn,
} = require("../controllers/trx-penangkar-petani.controller");
const {
  CreateTrxPtnPpl,
  getAllByCreatorNamePtn,
  getAllByReceiverNamePpl,
  getAllUnconfirmedTrxPpl,
} = require("../controllers/trx-petani-pengumpul.controller");
const {
  CreateTrxPplPdg,
  getAllByCreatorNamePpl,
  getAllByReceiverNamePdg,
  getAllUnconfirmedTrxPdg,
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

module.exports = router;
