const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admins', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    
  }, {
    sequelize,
    tableName: 'admins',
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
