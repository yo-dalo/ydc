const AdminsService = require("../services/adminsService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await AdminsService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Admins fetched successfully", result);
  } catch (error) {
    console.error("Error in adminsController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await AdminsService.getById(req.params.id);
    if (!item) return errorResponse(res, "Admins not found", 404);
    return successResponse(res, "Admins fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await AdminsService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Admins not found", 404);
    return successResponse(res, "Admins fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await AdminsService.create(req.body);
    return successResponse(res, "Admins added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await AdminsService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Admins not found or no changes made", 404);
    return successResponse(res, "Admins updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await AdminsService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Admins not found", 404);
    return successResponse(res, "Admins deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
