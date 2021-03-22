const sequelize = require('../config/connect');
const User = require("../models/Users");
const Chemical = require("../models/Chemicals");
const Role = require("../models/Roles");
const userData = require('./members-seed.json');
const chemicalData = require("./chemical-seed.json");
const roleData = require("./roles-seed.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Role.bulkCreate(roleData);

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Chemical.bulkCreate(chemicalData);

    process.exit(0);
};

seedDatabase();