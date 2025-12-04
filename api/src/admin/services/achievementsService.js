const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");



const { Op } = require("sequelize");

const models = initModels(sequelize);
const { achievements } = models;

class AchievementsService {
  static async getAll({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "Id",
    sortOrder = "DESC",
    isActive = null,     // "active", "inactive", null = all
    year = null,         // exact year like 2025
    yearFrom = null,     // from year
    yearTo = null,       // to year
    indexNo = null,
  } = {}) {
    const offset = (page - 1) * limit;
    const where = {};

    // Search in Name, Title, Description
    if (search) {
      where[Op.or] = [
        { Name: { [Op.like]: `%${search}%` } },
        { Title: { [Op.like]: `%${search}%` } },
        { Description: { [Op.like]: `%${search}%` } },
      ];
    }

    // Filter by Is_Active
    if (isActive === "active" || isActive === "inactive") {
      where.Is_Active = isActive;
    }

    // Filter by exact Year
    if (year) {
      where.Year = year;
    }

    // Filter by Year range
    if (yearFrom || yearTo) {
      where.Year = {};
      if (yearFrom) where.Year[Op.gte] = yearFrom;
      if (yearTo) where.Year[Op.lte] = yearTo;
    }

    // Filter by Index_No
    if (indexNo !== null && indexNo !== "") {
      where.Index_No = indexNo;
    }

    const { count, rows } = await achievements.findAndCountAll({
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
        year,
        yearFrom,
        yearTo,
        indexNo,
        sortBy,
        sortOrder,
      },
    };
  }

  static async getById(id) {
    return await achievements.findByPk(id);
  }

  static async create(data) {
    const created = await achievements.create(data);
    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async update(id, data) {
    const [affected] = await achievements.update(data, { where: { Id: id } });
    return affected > 0;
  }

  
  static async getForUpdate(id) {
    return await achievements.findByPk(id);
  }


  static async delete(id) {
    const deleted = await achievements.destroy({ where: { Id: id } });
    return deleted > 0;
  }
}

module.exports = AchievementsService;
