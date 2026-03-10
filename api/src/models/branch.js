const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('branch', {
        Id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('school', 'college'),
            allowNull: true,
        },
        Sub_Domain: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'branch',
        timestamps: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "Id" },
                ]
            },
        ]
    });
};
