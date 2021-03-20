const router = require("express").Router();
const chemicals = require("./chemicals");
const members = require("./members");
const userRoutes = require("./userRoutes");

router.use("/chemicals", chemicals);
router.use("/members", members);
router.use("/users", userRoutes);

module.exports = router;