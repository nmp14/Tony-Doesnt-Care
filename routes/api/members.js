const router = require("express").Router();
const Member = require("../../models/Members");

router.get("/", async (req, res) => {
    try {
        const memberResult = await Chemical.findAll();

        if (!memberResult) {
            res.status(404).json("Not Found");
        }

        res.status(200).json(memberResult);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;