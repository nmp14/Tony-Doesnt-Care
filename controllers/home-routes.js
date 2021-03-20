const router = require("express").Router();
const Member = require("../models/Members");
const Chemical = require("../models/Chemicals");
const checkAuth = require("../middlewares");
const path = require("path");

router.get("/", (req, res) => res.render('all'));

router.get("/members", async (req, res) => {
    try {
        const memberData = await Member.findAll();

        const members = memberData.map(member => member.get({ plain: true }));
        res.render("members", {
            members,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/addForm", checkAuth, async (req, res) => {
    try {
        const memberNamesRsults = await Member.findAll({
            attributes: ["name"]
        });

        const memberNames = memberNamesRsults.map(member => member.get({ plain: true }))

        res.render("addForm", {
            memberNames,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/storage", checkAuth, async (req, res) => {
    try {
        const chemicalData = await Chemical.findAll();

        const chemicals = chemicalData.map(chemical => chemical.get({ plain: true }));
        res.render('storage', {
            chemicals,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/login", async (req, res) => {
    try {
        res.render("login", {
            loggedIn: req.session.loggedIn
        })
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;