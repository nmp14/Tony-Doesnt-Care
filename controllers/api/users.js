const router = require("express").Router();
const User = require("../../models/Users");

router.get("/", async (req, res) => {
    try {
        const memberResult = await User.findAll();

        if (!memberResult) {
            res.status(404).json("Not Found");
        }

        res.status(200).json(memberResult);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;