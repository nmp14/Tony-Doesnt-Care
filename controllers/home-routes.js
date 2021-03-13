const router = require("express").Router();
const Member = require("../models/Members");
const Chemical = require("../models/Chemicals");
const path = require("path");

router.get("/", (req, res) => res.render('all'));

router.get("/members", async (req, res) => {
    try {
        const memberData = await Member.findAll();

        const members = memberData.map(member => member.get({ plain: true }));
        res.render("members", { members });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/addForm", (req, res) => res.render('addForm'));

router.get("/storage", async (req, res) => {
    try {
        const chemicalData = await Chemical.findAll();

        const chemicals = chemicalData.map(chemical => chemical.get({ plain: true }));
        res.render('storage', { chemicals });
    } catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;