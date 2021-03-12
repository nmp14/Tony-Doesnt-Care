const router = require("express").Router();
const chemicals = require("./chemicals");

router.use("/chemicals", chemicals);

module.exports = router;