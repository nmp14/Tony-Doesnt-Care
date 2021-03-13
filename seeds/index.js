const sequelize = require('../config/connect');
const Member = require("../models/Members");
const Chemical = require("../models/Chemicals");
const memberData = require('./members-seed.json');
const chemicalData = require("./chemical-seed.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: false });

    await Member.bulkCreate(memberData, {
        individualHooks: true,
        returning: true,
    });

    await Chemical.bulkCreate(chemicalData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();