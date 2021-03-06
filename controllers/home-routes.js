const router = require("express").Router();
const checkAuth = require("../middlewares");
const { User, Role, Chemical } = require("../models");

router.get("/", (req, res) => res.render('all', {
    loggedIn: req.session.loggedIn
}));

router.get("/members", async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{
                model: Role
            }]
        });

        const users = userData.map(user => user.get({ plain: true }));

        res.render("members", {
            users: users,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/addForm", checkAuth, async (req, res) => {
    try {
        const userResults = await User.findAll({
            include: [{ model: Role }]
        });

        const users = userResults.map(member => member.get({ plain: true }))

        res.render("addForm", {
            users,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

// Page that displays all chemicals avaialble
router.get("/storage", checkAuth, async (req, res) => {
    try {
        const chemicalData = await Chemical.findAll({
            include: { model: User },
            attributes: ["name", "id"],
            order: [["name", "ASC"]]
        });

        const chemicals = chemicalData.map(chemical => chemical.get({ plain: true }));
        const length = chemicals.length;

        res.render('storage', {
            length,
            chemicals,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

// Page for specific chemical information
router.get("/chemical/:id", checkAuth, async (req, res) => {
    try {
        const { id } = req.params
        const idNum = parseInt(id);

        const chemicalResult = await Chemical.findByPk(idNum, {
            include: {
                model: User
            }
        });

        if (!chemicalResult) {
            res.status(400).json("Chemical was not found");
        }

        const chemical = chemicalResult.get({ plain: true });

        res.render("chemicalInfo", {
            chemical,
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
})

// Login page
router.get("/login", async (req, res) => {
    try {
        res.render("login", {
            loggedIn: req.session.loggedIn
        })
    } catch (e) {
        res.status(500).json(e);
    }
});

// Register new user form
router.get("/register", checkAuth, async (req, res) => {
    try {
        const roleData = await Role.findAll();

        const roles = roleData.map(role => role.get({ plain: true }));

        const filteredRoles = roles.filter(role => {
            return role.title !== "Boss"
        });

        // Find role with title of student so we can move it to front of arr
        for (const obj of filteredRoles) {
            if (obj.title === "Student") {
                const studentRole = filteredRoles.splice(filteredRoles.indexOf(obj), 1);
                filteredRoles.unshift(...studentRole);
            }
        }

        res.render("register", {
            filteredRoles,
            loggedIn: req.session.loggedIn
        })
    } catch (e) {
        res.status(500).json(e);
    }
})

// Get profile for loggedIn user. Needs authentication check
router.get("/profile", checkAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id);

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