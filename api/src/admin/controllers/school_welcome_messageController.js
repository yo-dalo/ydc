const SchoolWelcomeMessageService = require("../services/school_welcome_messageService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await SchoolWelcomeMessageService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "School Welcome Message fetched successfully", result);
  } catch (error) {
    console.error("Error in school_welcome_messageController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await SchoolWelcomeMessageService.getById(req.params.id);
    if (!item) return errorResponse(res, "School Welcome Message not found", 404);
    return successResponse(res, "School Welcome Message fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await SchoolWelcomeMessageService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "School Welcome Message not found", 404);
    return successResponse(res, "School Welcome Message fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await SchoolWelcomeMessageService.create(req.body);
    return successResponse(res, "School Welcome Message added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await SchoolWelcomeMessageService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "School Welcome Message not found or no changes made", 404);
    return successResponse(res, "School Welcome Message updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await SchoolWelcomeMessageService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "School Welcome Message not found", 404);
    return successResponse(res, "School Welcome Message deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
