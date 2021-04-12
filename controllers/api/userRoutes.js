const router = require("express").Router();
const User = require("../../models/Users");

// Create user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        res.status(201).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});
// logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
// Delete user
router.delete("/:id", async (req, res) => {
    try {
        const userDeleted = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userDeleted) {
            res.status(404).json("Could not find user");
            return;
        }

        res.status(200).json("User successfully deleted");
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;