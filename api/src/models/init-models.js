var DataTypes = require("sequelize").DataTypes;
var _achievements = require("./achievements");
var _admins = require("./admins");
var _admission = require("./admission");
var _admission_open_message = require("./admission_open_message");
var _blog = require("./blog");
var _facility = require("./facility");
var _gallery = require("./gallery");
var _gallery_category = require("./gallery_category");
var _messages = require("./messages");
var _notification = require("./notification");
var _pages = require("./pages");
var _pages_category = require("./pages_category");
var _poster = require("./poster");
var _quick_link = require("./quick_link");
var _school_info = require("./school_info");
var _school_welcome_message = require("./school_welcome_message");
var _toper = require("./toper");
var _toper_category = require("./toper_category");
var _useful_link = require("./useful_link");
var _branch = require("./branch");

function initModels(sequelize) {
  var achievements = _achievements(sequelize, DataTypes);
  var admins = _admins(sequelize, DataTypes);
  var admission = _admission(sequelize, DataTypes);
  var admission_open_message = _admission_open_message(sequelize, DataTypes);
  var blog = _blog(sequelize, DataTypes);
  var facility = _facility(sequelize, DataTypes);
  var gallery = _gallery(sequelize, DataTypes);
  var gallery_category = _gallery_category(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var notification = _notification(sequelize, DataTypes);
  var pages = _pages(sequelize, DataTypes);
  var pages_category = _pages_category(sequelize, DataTypes);
  var poster = _poster(sequelize, DataTypes);
  var quick_link = _quick_link(sequelize, DataTypes);
  var school_info = _school_info(sequelize, DataTypes);
  var school_welcome_message = _school_welcome_message(sequelize, DataTypes);
  var toper = _toper(sequelize, DataTypes);
  var toper_category = _toper_category(sequelize, DataTypes);
  var useful_link = _useful_link(sequelize, DataTypes);
  var branch = _branch(sequelize, DataTypes);

  gallery.belongsTo(gallery_category, { as: "Gallery_Category", foreignKey: "Gallery_Category_Id" });
  gallery_category.hasMany(gallery, { as: "galleries", foreignKey: "Gallery_Category_Id" });
  pages.belongsTo(pages_category, { as: "Pages_Category", foreignKey: "Pages_Category_Id" });
  pages_category.hasMany(pages, { as: "pages", foreignKey: "Pages_Category_Id" });
  achievements.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  blog.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  school_info.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  school_welcome_message.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  toper.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  toper_category.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  useful_link.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  poster.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  admins.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  facility.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  admission.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  admission_open_message.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  messages.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });
  notification.belongsTo(branch, { foreignKey: "Branch_Id", as: "Branch" });





  return {
    achievements,
    admins,
    admission,
    admission_open_message,
    blog,
    facility,
    gallery,
    gallery_category,
    messages,
    notification,
    pages,
    pages_category,
    poster,
    quick_link,
    school_info,
    school_welcome_message,
    toper,
    toper_category,
    useful_link,
    branch
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
