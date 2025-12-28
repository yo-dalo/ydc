const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { pages, pages_category } = models;

class PagesService {
static async getAll() {
  return await pages_category.findAll({
    where: { 
      Is_Active: "active" 
    },
    attributes: ["Id", "Name", "Index_No"],
    include: [
      {
        model: pages,
        as: "pages",                    // ← Yeh bilkul sahi hai (init-models mein hasMany ka alias 'pages' hota hai)
        where: { 
          Is_Active: "active" 
        },
        required: false,                // Category dikhegi chahe uske pages ho ya na ho
        attributes: ["Id", "Name", "Index_No", "Page_Data"],
        order: [["Index_No", "ASC"]],   // Pages ko bhi index ke hisab se sort karo
      },
    ],
    order: [["Index_No", "ASC"]],       // Categories ko index ke hisab se sort karo
  });
}


  static async getById(id) {
    return await pages.findByPk(id);
  }

  static async create(data) {
    const created = await pages.create(data);
    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async update(id, data) {
    const [affected] = await pages.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async getForUpdate(id) {
    return await pages.findByPk(id);
  }

  static async delete(id) {
    const deleted = await pages.destroy({ where: { Id: id } });
    return deleted > 0;
  }
}

module.exports = PagesService;
