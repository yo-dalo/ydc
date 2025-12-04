const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { blog } = models;

class BlogService {
  static async getAll(query = {}) {
    const where = Object.keys(query).length ? query : undefined;
    return await blog.findAll({ where });
  }

  static async getById(id) {
    return await blog.findByPk(id);
  }

  static async create(data) {
    const created = await blog.create(data);
    return created ? created.Id || created.id || created.get('Id') : null;
  }

  static async update(id, data) {
    const [affected] = await blog.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async delete(id) {
    const deleted = await blog.destroy({ where: { Id: id } });
    return deleted > 0;
  }
}

module.exports = BlogService;
