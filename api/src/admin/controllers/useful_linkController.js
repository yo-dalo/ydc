const UsefulLinkService = require("../services/useful_linkService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await UsefulLinkService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Useful Link fetched successfully", result);
  } catch (error) {
    console.error("Error in useful_linkController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await UsefulLinkService.getById(req.params.id);
    if (!item) return errorResponse(res, "Useful Link not found", 404);
    return successResponse(res, "Useful Link fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await UsefulLinkService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Useful Link not found", 404);
    return successResponse(res, "Useful Link fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await UsefulLinkService.create(req.body);
    return successResponse(res, "Useful Link added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await UsefulLinkService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Useful Link not found or no changes made", 404);
    return successResponse(res, "Useful Link updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await UsefulLinkService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Useful Link not found", 404);
    return successResponse(res, "Useful Link deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
