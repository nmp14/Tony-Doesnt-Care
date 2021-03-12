const Chemicals = require("./Chemicals");
const Member = require("./Members");

Member.hasMany(Chemicals, {
    foreignKey: "member_id"
});

Chemicals.belongsTo(Member, {
    foreignKey: "member_id"
});