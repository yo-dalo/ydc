const FacilityService = require("../services/facilityService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await FacilityService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Facility fetched successfully", result);
  } catch (error) {
    console.error("Error in facilityController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await FacilityService.getById(req.params.id);
    if (!item) return errorResponse(res, "Facility not found", 404);
    return successResponse(res, "Facility fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await FacilityService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Facility not found", 404);
    return successResponse(res, "Facility fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await FacilityService.create(req.body, req.file?.filename);
    return successResponse(res, "Facility added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await FacilityService.update(req.params.id, req.body, req.file?.filename);
    if (!updated) return errorResponse(res, "Facility not found or no changes made", 404);
    return successResponse(res, "Facility updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await FacilityService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Facility not found", 404);
    return successResponse(res, "Facility deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
