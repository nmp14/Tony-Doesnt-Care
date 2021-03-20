const Chemicals = require("./Chemicals");
const User = require("./Users");
const Role = require("./Roles");

User.hasMany(Chemicals, {
    foreignKey: "user_id"
});

Chemicals.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasOne(Role, {
    foreignKey: "role_id"
});

Role.belongsTo(User, {
    foreignKey: "role_id"
});

module.exports = { Chemicals, Role, User };