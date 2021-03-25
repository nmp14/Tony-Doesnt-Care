const router = require("express").Router();
const Chemical = require("../../models/Chemicals");

router.get("/", async (req, res) => {
    try {
        const chemicalResult = await Chemical.findAll();

        if (!chemicalResult) {
            res.status(404).json("Not Found");
        }

        res.status(200).json(chemicalResult);
    } catch (e) {
        res.status(500).json(e);
    }
});

// Create chemical
router.post("/", async (req, res) => {
    try {
        const chemical = await Chemical.create(req.body);

        res.status(201).json(chemical);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;