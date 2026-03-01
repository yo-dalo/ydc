const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { admins } = models;

class AdminsService {
  static async getAll({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "Id",
    sortOrder = "DESC",
    isActive = null,
    indexNo = null,
    branchId = null,
  } = {}) {
    const offset = (page - 1) * limit;
    const where = {};

    // Search functionality
    if (search) {
      where[Op.or] = [
        { Name: { [Op.like]: `%${search}%` } },
        { Email: { [Op.like]: `%${search}%` } },
        { Username: { [Op.like]: `%${search}%` } },
        { Branch_Id: branchId }
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

    const { count, rows } = await admins.findAndCountAll({
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

  static async getById(id, branchId) {
    return await admins.findOne({ where: { Id: id, Branch_Id: branchId } });
  }

  static async create(data, branchId) {
    const created = await admins.create({...data, Branch_Id: branchId});
    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async update(id, data, branchId) {
    const [affected] = await admins.update(data, { where: { Id: id, Branch_Id: branchId } });
    return affected > 0;
  }

  static async getForUpdate(id, branchId) {
    return await admins.findOne({ where: { Id: id, Branch_Id: branchId } });
  }

  static async delete(id, branchId) {
    const deleted = await admins.destroy({ where: { Id: id, Branch_Id: branchId } });
    return deleted > 0;
  }
}

module.exports = AdminsService;
