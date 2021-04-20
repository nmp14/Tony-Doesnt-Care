const router = require("express").Router();
const chemicals = require("./chemicals");
const userRoutes = require("./userRoutes");

router.use("/chemicals", chemicals);
router.use("/users", userRoutes);

module.exports = router;