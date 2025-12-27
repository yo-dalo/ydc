const PosterService = require("../services/posterService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await PosterService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Poster fetched successfully", result);
  } catch (error) {
    console.error("Error in posterController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await PosterService.getById(req.params.id);
    if (!item) return errorResponse(res, "Poster not found", 404);
    return successResponse(res, "Poster fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await PosterService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Poster not found", 404);
    return successResponse(res, "Poster fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await PosterService.create(req.body);
    return successResponse(res, "Poster added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await PosterService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Poster not found or no changes made", 404);
    return successResponse(res, "Poster updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await PosterService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Poster not found", 404);
    return successResponse(res, "Poster deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
