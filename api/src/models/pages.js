const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Pages_Category_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pages_category',
        key: 'Id'
      }
    },
    Page_Data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Is_Active: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: true,
      defaultValue: "active"
    },
    Index_No: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pages',
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
      {
        name: "Pages_Category_Id",
        using: "BTREE",
        fields: [
          { name: "Pages_Category_Id" },
        ]
      },
    ]
  });
};
