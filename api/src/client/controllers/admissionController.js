const AdmissionService = require("../services/admissionService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await AdmissionService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Admission fetched successfully", result);
  } catch (error) {
    console.error("Error in admissionController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await AdmissionService.getById(req.params.id);
    if (!item) return errorResponse(res, "Admission not found", 404);
    return successResponse(res, "Admission fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await AdmissionService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Admission not found", 404);
    return successResponse(res, "Admission fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await AdmissionService.create(req.body);
    return successResponse(res, "Admission added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await AdmissionService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Admission not found or no changes made", 404);
    return successResponse(res, "Admission updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await AdmissionService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Admission not found", 404);
    return successResponse(res, "Admission deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
