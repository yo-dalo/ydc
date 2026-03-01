const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { blog, admission, notification, poster,toper } = models;

class Dash_boardService {
  static async getAll({branchId}) {
    const totalBlogs = await blog.count({ where: { Branch_Id: branchId } });
   const totalAdmissions = await admission.count({ where: { Branch_Id: branchId } });
   const totalNotifications = await notification.count({ where: { Branch_Id: branchId } });
   const totalPosters = await poster.count({ where: { Branch_Id: branchId } });
   const totalTopers = await toper.count({ where: { Branch_Id: branchId } }); 

    return { totalBlogs, totalAdmissions, totalNotifications, totalPosters, totalTopers  };
  }

  // static async getById(id) {
  //   return await blog.findByPk(id);
  // }

  // static async create(data, Image) {
  //   const created = await blog.create({ ...data, Image: Image });
  //   return created ? created.Id || created.id || created.get("Id") : null;
  // }

  // static async update(id, data, Image) {
  //   const updateData = Image ? { ...data, Image: Image } : data;
  //   const [affected] = await blog.update(updateData, { where: { Id: id } });
  //   return affected > 0;
  // }

  // static async getForUpdate(id) {
  //   return await blog.findByPk(id);
  // }

  // static async delete(id) {
  //   const deleted = await blog.destroy({ where: { Id: id } });
  //   return deleted > 0;
  // }
}

module.exports = Dash_boardService;
