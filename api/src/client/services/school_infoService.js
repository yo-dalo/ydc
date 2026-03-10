const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { school_info } = models;

class SchoolInfoService {
  static async getAll() {
    return await school_info.findAll({ where: { Is_Active: "active" } });
  }

  static async getById(id) {
    return await school_info.findByPk(id);
  }

  static async create(data) {
    const created = await school_info.create(data);
    return created ? created.id || created.Id : null;
  }

  static async update(id, data) {
    const [affected] = await school_info.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async delete(id) {
    const deleted = await school_info.destroy({ where: { Id: id } });
    return deleted > 0;
  }

  static async getForUpdate(id) {
    return await school_info.findByPk(id);
  }
}

module.exports = SchoolInfoService;
