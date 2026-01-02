const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { poster } = models;

class PosterService {
  static async getAll({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "Id",
    sortOrder = "DESC",
    isActive = "active",
    indexNo = null,
  } = {}) {
    const offset = (page - 1) * limit;
    const where = {};

    // Search functionality
    if (search) {
      where[Op.or] = [
        { Name: { [Op.like]: `%${search}%` } },
      ];
    }

    // Filter by Is_Active
    if (isActive === "active" || isActive === "inactive") {
      where.Is_Active = isActive;
    }

    // Filter by Index_No
    if (indexNo !== null && indexNo !== "") {
      where.Index_No = indexNo;
    }

    const { count, rows } = await poster.findAndCountAll({
      where,
      offset,
      limit: parseInt(limit),
      order: [[sortBy, sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC"]],
    });

    return {
      data: rows,
      pagination: {
        total: count,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(count / limit),
      },
      filters: {
        search,
        isActive,
        indexNo,
        sortBy,
        sortOrder,
      },
    };
  }

  static async getById(id) {
    return await poster.findByPk(id);
  }

  static async create(data) {
    const created = await poster.create(data);
    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async update(id, data) {
    const [affected] = await poster.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async getForUpdate(id) {
    return await poster.findByPk(id);
  }

  static async delete(id) {
    const deleted = await poster.destroy({ where: { Id: id } });
    return deleted > 0;
  }
}

module.exports = PosterService;
