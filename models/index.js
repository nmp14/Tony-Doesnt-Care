const Chemical = require("./Chemicals");
const User = require("./Users");
const Role = require("./Roles");

User.hasMany(Chemical, {
    foreignKey: "user_id"
});

Chemical.belongsTo(User, {
    foreignKey: "user_id"
});

Role.hasMany(User, {
    foreignKey: "role_id"
});

User.belongsTo(Role, {
    foreignKey: "role_id"
});

module.exports = { Chemical, Role, User };