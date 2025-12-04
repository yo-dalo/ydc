const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Image: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Roll: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Read_More_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Index_No: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Is_Active: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: true,
      defaultValue: "active"
    }
  }, {
    sequelize,
    tableName: 'messages',
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
