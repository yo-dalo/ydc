const ToperService = require("../services/toperService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await ToperService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Toper fetched successfully", result);
  } catch (error) {
    console.error("Error in toperController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await ToperService.getById(req.params.id);
    if (!item) return errorResponse(res, "Toper not found", 404);
    return successResponse(res, "Toper fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await ToperService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Toper not found", 404);
    return successResponse(res, "Toper fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await ToperService.create(req.body, req.file?.filename);
    return successResponse(res, "Toper added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await ToperService.update(req.params.id, req.body, req.file?.filename);
    if (!updated) return errorResponse(res, "Toper not found or no changes made", 404);
    return successResponse(res, "Toper updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ToperService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Toper not found", 404);
    return successResponse(res, "Toper deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
