const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../HTML/index.html")));
router.get("/storage", (req, res) => res.sendFile(path.join(__dirname, "../../HTML/storage.html")));
router.get("/addForm", (req, res) => res.sendFile(path.join(__dirname, "../../HTML/addForm.html")));
router.get("/members", (req, res) => res.sendFile(path.join(__dirname, "../../HTML/members.html")));

module.exports = router;