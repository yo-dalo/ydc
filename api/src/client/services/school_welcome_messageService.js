const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { school_welcome_message } = models;

class SchoolWelcomeMessageService {
  static async getAll() {
    return await school_welcome_message.findAll();
  }

  static async getById(id) {
    return await school_welcome_message.findByPk(id);
  }

  static async create(data) {
    const created = await school_welcome_message.create(data);
    return created ? created.id || created.Id : null;
  }

  static async update(id, data) {
    const [affected] = await school_welcome_message.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async delete(id) {
    const deleted = await school_welcome_message.destroy({ where: { Id: id } });
    return deleted > 0;
  }

  static async getForUpdate(id) {
    return await school_welcome_message.findByPk(id);
  }
}

module.exports = SchoolWelcomeMessageService;
