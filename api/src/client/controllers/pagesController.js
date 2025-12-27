const PagesService = require("../services/pagesService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await PagesService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Pages fetched successfully", result);
  } catch (error) {
    console.error("Error in pagesController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await PagesService.getById(req.params.id);
    if (!item) return errorResponse(res, "Pages not found", 404);
    return successResponse(res, "Pages fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await PagesService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Pages not found", 404);
    return successResponse(res, "Pages fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await PagesService.create(req.body);
    return successResponse(res, "Pages added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await PagesService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Pages not found or no changes made", 404);
    return successResponse(res, "Pages updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await PagesService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Pages not found", 404);
    return successResponse(res, "Pages deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
