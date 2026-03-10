const QuickLinkService = require("../services/quick_linkService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await QuickLinkService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Quick Link fetched successfully", result);
  } catch (error) {
    console.error("Error in quick_linkController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await QuickLinkService.getById(req.params.id);
    if (!item) return errorResponse(res, "Quick Link not found", 404);
    return successResponse(res, "Quick Link fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await QuickLinkService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Quick Link not found", 404);
    return successResponse(res, "Quick Link fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await QuickLinkService.create(req.body);
    return successResponse(res, "Quick Link added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await QuickLinkService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Quick Link not found or no changes made", 404);
    return successResponse(res, "Quick Link updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await QuickLinkService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Quick Link not found", 404);
    return successResponse(res, "Quick Link deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
