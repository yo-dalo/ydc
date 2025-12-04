const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school_info', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Experience: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Students: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Teachers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Awards: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    School_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Short_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Logo_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Favicon_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Motto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Established_Year: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
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
    Pin_Code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Alternate_Phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Academic_Year_Start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Academic_Year_End: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Youtube_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Linkedin_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Instagram_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Twitter_Url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Board_Affiliation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Board_Affiliation_Number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contact_Person_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Contact_Person_Position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Contact_Person_Phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Medium_Of_Instruction: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Display_Order: {
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
    tableName: 'school_info',
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
