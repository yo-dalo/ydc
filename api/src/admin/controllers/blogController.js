const BlogService = require("../services/blogService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const items = await BlogService.getAll(req.query);
    return successResponse(res, "Blog items fetched successfully", items);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await BlogService.getById(req.params.id);
    if (!item) return errorResponse(res, "Blog item not found", 404);
    return successResponse(res, "Blog item fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await BlogService.create(req.body);
    return successResponse(res, "Blog item added successfully", { id });
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await BlogService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Blog item not found or not updated", 404);
    return successResponse(res, "Blog item updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await BlogService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Blog item not found or not deleted", 404);
    return successResponse(res, "Blog item deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
