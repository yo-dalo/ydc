const NotificationService = require("../services/notificationService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await NotificationService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Notification fetched successfully", result);
  } catch (error) {
    console.error("Error in notificationController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await NotificationService.getById(req.params.id);
    if (!item) return errorResponse(res, "Notification not found", 404);
    return successResponse(res, "Notification fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await NotificationService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Notification not found", 404);
    return successResponse(res, "Notification fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await NotificationService.create(req.body);
    return successResponse(res, "Notification added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await NotificationService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Notification not found or no changes made", 404);
    return successResponse(res, "Notification updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await NotificationService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Notification not found", 404);
    return successResponse(res, "Notification deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
