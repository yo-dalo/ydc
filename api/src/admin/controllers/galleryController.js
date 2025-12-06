const GalleryService = require("../services/galleryService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await GalleryService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Gallery fetched successfully", result);
  } catch (error) {
    console.error("Error in galleryController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await GalleryService.getById(req.params.id);
    if (!item) return errorResponse(res, "Gallery not found", 404);
    return successResponse(res, "Gallery fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await GalleryService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Gallery not found", 404);
    return successResponse(res, "Gallery fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await GalleryService.create(req.body, req.file?.filename);
    return successResponse(res, "Gallery added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await GalleryService.update(req.params.id, req.body, req.file?.filename);
    if (!updated) return errorResponse(res, "Gallery not found or no changes made", 404);
    return successResponse(res, "Gallery updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await GalleryService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Gallery not found", 404);
    return successResponse(res, "Gallery deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
