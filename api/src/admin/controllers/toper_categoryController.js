const ToperCategoryService = require("../services/toper_categoryService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await ToperCategoryService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Toper Category fetched successfully", result);
  } catch (error) {
    console.error("Error in toper_categoryController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await ToperCategoryService.getById(req.params.id);
    if (!item) return errorResponse(res, "Toper Category not found", 404);
    return successResponse(res, "Toper Category fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await ToperCategoryService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Toper Category not found", 404);
    return successResponse(res, "Toper Category fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await ToperCategoryService.create(req.body);
    return successResponse(res, "Toper Category added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await ToperCategoryService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Toper Category not found or no changes made", 404);
    return successResponse(res, "Toper Category updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ToperCategoryService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Toper Category not found", 404);
    return successResponse(res, "Toper Category deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
