const Chemicals = require("./Chemicals");
const Member = require("./Members");
const User = require("./Users");
const Role = require("./Roles");

Member.hasMany(Chemicals, {
    foreignKey: "member_id"
});

Chemicals.belongsTo(Member, {
    foreignKey: "member_id"
});

User.hasOne(Role, {
    foreignKey: "role_id"
});

Role.belongsTo(User, {
    foreignKey: "role_id"
});

module.exports = { Member, Chemicals, Role, User };