const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { gallery, gallery_image } = models;

class GalleryService {
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
    const where = { Branch_Id: branchId };

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

    const { count, rows } = await gallery.findAndCountAll({
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
    return await gallery.findOne({ where: { Id: id, Branch_Id: branchId } });
  }

static async create(data, Image, branchId) {


  const created = await gallery.create({ ...data, Branch_Id: branchId });

  if (Array.isArray(Image) && Image.length > 0) {
    for (const img of Image) {
      await gallery_image.create({
        Gallery_Id: created.Id,
        Image: img,
        Branch_Id: branchId
      });
    }
  }

  return created ? created.Id || created.id || created.get("Id") : null;
}static async create(data, Image, branchId) {

  const created = await gallery.create({ ...data, Branch_Id: branchId });

  if (Array.isArray(Image) && Image.length > 0) {
    for (const img of Image) {
      await gallery_image.create({
        Gallery_Id: created.Id,
        Image: img,
        Branch_Id: branchId
      });
    }
  }

  return created ? created.Id || created.id || created.get("Id") : null;
}

  static async update(id, data, Image, branchId) {
    const updateData = Image ? { ...data, Image: Image } : data;
    const [affected] = await gallery.update(updateData, { where: { Id: id, Branch_Id: branchId } });
    return affected > 0;
  }

  static async getForUpdate(id, branchId) {
    return await gallery.findOne({ where: { Id: id, Branch_Id: branchId } });
  }

  static async delete(id, branchId) {
    const deleted = await gallery.destroy({ where: { Id: id, Branch_Id: branchId } });
    return deleted > 0;
  }
}

module.exports = GalleryService;
