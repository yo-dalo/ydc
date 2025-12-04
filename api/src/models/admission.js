const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admission', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Father_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Mother_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Class: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Admission_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    More_Info: {
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
    tableName: 'admission',
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
