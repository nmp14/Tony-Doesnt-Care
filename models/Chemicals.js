const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Chemical extends Model { }

Chemical.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        distributor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        serialCode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        member_id: {
            references: {
                model: "member",
                key: "id"
            }
        }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "chemical"
}
);

module.exports = Chemical;