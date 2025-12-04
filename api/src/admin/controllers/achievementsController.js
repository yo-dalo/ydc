const AchievementsService = require("../services/achievementsService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await AchievementsService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      year: req.query.year,
      yearFrom: req.query.yearFrom,
      yearTo: req.query.yearTo,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Achievements fetched successfully", result);
  } catch (error) {
    console.error("Error in achievementsController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await AchievementsService.getById(req.params.id);
    if (!item) return errorResponse(res, "Achievement not found", 404);
    return successResponse(res, "Achievement fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await AchievementsService.create(req.body);
    return successResponse(res, "Achievement added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await AchievementsService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Achievement not found or no changes made", 404);
    return successResponse(res, "Achievement updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await AchievementsService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Achievement not found", 404);
    return successResponse(res, "Achievement fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};



exports.delete = async (req, res) => {
  try {
    const deleted = await AchievementsService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Achievement not found", 404);
    return successResponse(res, "Achievement deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
