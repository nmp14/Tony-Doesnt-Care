const router = require("express").Router();
const Chemical = require("../models/Chemicals");
const checkAuth = require("../middlewares");
const User = require("../models/Users");
const path = require("path");

router.get("/", (req, res) => res.render('all', {
    loggedIn: req.session.loggedIn
}));

router.get("/members", async (req, res) => {
    try {
        const memberData = await User.findAll();

        const users = memberData.map(user => user.get({ plain: true }));
        res.render("members", {
            users,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/addForm", checkAuth, async (req, res) => {
    try {
        const memberNamesRsults = await User.findAll({
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

// Get profile for loggedIn user. Needs authentication check
router.get("/profile", checkAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: {
                model: Project
            }
        })

        user = userData.get({ plain: true });

        res.render("profile", {
            user,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id
        })
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

module.exports = router;