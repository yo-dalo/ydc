const SchoolInfoService = require("../services/school_infoService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await SchoolInfoService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "School Info fetched successfully", result);
  } catch (error) {
    console.error("Error in school_infoController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await SchoolInfoService.getById(req.params.id);
    if (!item) return errorResponse(res, "School Info not found", 404);
    return successResponse(res, "School Info fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await SchoolInfoService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "School Info not found", 404);
    return successResponse(res, "School Info fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await SchoolInfoService.create(req.body);
    return successResponse(res, "School Info added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await SchoolInfoService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "School Info not found or no changes made", 404);
    return successResponse(res, "School Info updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await SchoolInfoService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "School Info not found", 404);
    return successResponse(res, "School Info deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
