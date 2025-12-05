const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { toper_category } = models;

class ToperCategoryService {
  static async getAll({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "Id",
    sortOrder = "DESC",
    isActive = null,
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

    const { count, rows } = await toper_category.findAndCountAll({
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
    return await toper_category.findByPk(id);
  }

  static async create(data) {
    const created = await toper_category.create(data);
    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async update(id, data) {
    const [affected] = await toper_category.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async getForUpdate(id) {
    return await toper_category.findByPk(id);
  }

  static async delete(id) {
    const deleted = await toper_category.destroy({ where: { Id: id } });
    return deleted > 0;
  }
}

module.exports = ToperCategoryService;
