const router = require("express").Router();
const htmlRoute = require("./htmlRoutes");

router.use("/", htmlRoute);

module.exports = router;