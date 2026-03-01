const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { branch } = models;

class BranchService {
  static async getAll() {
    return await branch.findAll();
  }

  static async getById(id) {
    return await branch.findByPk(id);
  }

  static async create(data) {
    const created = await branch.create(data);
    return created ? created.id || created.Id : null;
  }

  static async update(id, data) {
    const [affected] = await branch.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async delete(id) {
    const deleted = await branch.destroy({ where: { Id: id } });
    return deleted > 0;
  }

  static async getForUpdate(id) {
    return await branch.findByPk(id);
  }
}

module.exports = BranchService;
