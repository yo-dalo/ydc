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
        Sub_domain: {
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
