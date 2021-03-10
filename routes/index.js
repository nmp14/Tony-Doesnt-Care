const router = require("express").Router();
const html = require("./html");
//const api = require("./api");

router.use("/", html);

module.exports = router;