const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admission_open_message', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Index_No: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Read_More_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Is_Active: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: true,
      defaultValue: "active"
    }
  }, {
    sequelize,
    tableName: 'admission_open_message',
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
