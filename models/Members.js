const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Member extends Model { }

Member.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        graduated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        boss: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "member"
    }
);

module.exports = Member;