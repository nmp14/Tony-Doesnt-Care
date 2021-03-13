const router = require("express").Router();
const chemicals = require("./chemicals");
const members = require("./members");

router.use("/chemicals", chemicals);
router.use("/members", members);

module.exports = router;