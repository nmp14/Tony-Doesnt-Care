const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");
const User = require("./Users");

class Role extends Model { }

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "role"
    }
);

model.exports = User;