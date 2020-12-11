const express = require("express");
const router = express.Router();
const {
  CreateTrxPkrPtn,
} = require("../controllers/trx-penangkar-petani.controller");
const {
  CreateTrxPtnPpl,
} = require("../controllers/trx-petani-pengumpul.controller");
const {
  CreateTrxPplPdg,
} = require("../controllers/trx-pengumpul-pedagang.controller");
const middleware = require("../middleware/middleware");

router.post("/pkr-ptn", CreateTrxPkrPtn);
router.post("/ptn-ppl", CreateTrxPtnPpl);
router.post("/ppl-pdg", CreateTrxPplPdg);

module.exports = router;
