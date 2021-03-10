const router = require("express").Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));
router.get('/storage', (req, res) => res.sendFile(path.join(__dirname, '../../storage.html')));
router.get("/addForm", (req, res) => res.sendFile(path.join(__dirname, '../../addForm.html')));

module.exports = router;