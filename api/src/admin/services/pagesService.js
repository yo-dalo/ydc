const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { pages } = models;

class PagesService {
    static async getAll(query = {}) {
        // Simple mapping: if query has filters, pass them as where
        const where = Object.keys(query).length ? query : undefined;
        return await pages.findAll({ where });
    }

    static async getById(id) {
        return await pages.findByPk(id);
    }

    static async getByIdForUpdate(id) {
        return await pages.findByPk(id);
    }

    static async create(data) {
        const created = await pages.create(data);
        return created ? created.Id || created.id || created.get('Id') : null;
    }

    static async update(id, data) {
        const [affected] = await pages.update(data, { where: { Id: id } });
        return affected > 0;
    }

    static async delete(id) {
        const deleted = await pages.destroy({ where: { Id: id } });
        return deleted > 0;
    }
}

module.exports = PagesService;
