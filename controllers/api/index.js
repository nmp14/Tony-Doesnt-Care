const router = require("express").Router();
const chemicals = require("./chemicals");
const users = require("./users");
const userRoutes = require("./userRoutes");

router.use("/chemicals", chemicals);
router.use("/members", users);
router.use("/users", userRoutes);

module.exports = router;