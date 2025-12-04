const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toper', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Student_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Index_No: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Marks_Percentage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Year: {
      type: DataTypes.STRING(18),
      allowNull: false
    },
    Gender: {
      type: DataTypes.ENUM('male','female'),
      allowNull: false
    },
    ' Class': {
      type: DataTypes.STRING(17),
      allowNull: false
    },
    Father_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Rank: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Is_Active: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: true,
      defaultValue: "active"
    }
  }, {
    sequelize,
    tableName: 'toper',
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
