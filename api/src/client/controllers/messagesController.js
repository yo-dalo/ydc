const MessagesService = require("../services/messagesService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await MessagesService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Messages fetched successfully", result);
  } catch (error) {
    console.error("Error in messagesController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await MessagesService.getById(req.params.id);
    if (!item) return errorResponse(res, "Messages not found", 404);
    return successResponse(res, "Messages fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await MessagesService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Messages not found", 404);
    return successResponse(res, "Messages fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await MessagesService.create(req.body);
    return successResponse(res, "Messages added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await MessagesService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Messages not found or no changes made", 404);
    return successResponse(res, "Messages updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await MessagesService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Messages not found", 404);
    return successResponse(res, "Messages deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
