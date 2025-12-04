const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gallery', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Gallery_Category_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'gallery_category',
        key: 'Id'
      }
    },
    Image: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Is_Active: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: true,
      defaultValue: "active"
    }
  }, {
    sequelize,
    tableName: 'gallery',
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
        name: "Gallery_Category_Id",
        using: "BTREE",
        fields: [
          { name: "Gallery_Category_Id" },
        ]
      },
    ]
  });
};
