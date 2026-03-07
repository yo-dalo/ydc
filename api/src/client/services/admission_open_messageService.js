const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { admission_open_message } = models;

class AdmissionOpenMessageService {
  static async getAll() {
    return await admission_open_message.findAll();
  }

  static async getById(id) {
    return await admission_open_message.findByPk(id);
  }

  static async create(data) {
    const created = await admission_open_message.create(data);
    return created ? created.id || created.Id : null;
  }

  static async update(id, data) {
    const [affected] = await admission_open_message.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async delete(id) {
    const deleted = await admission_open_message.destroy({ where: { Id: id } });
    return deleted > 0;
  }

  static async getForUpdate(id) {
    return await admission_open_message.findByPk(id);
  }
}

module.exports = AdmissionOpenMessageService;
