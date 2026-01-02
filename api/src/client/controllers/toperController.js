const ToperService = require("../services/toperService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await ToperService.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "Toper fetched successfully", result);
  } catch (error) {
    console.error("Error in toperController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await ToperService.getById(req.params.id);
    if (!item) return errorResponse(res, "Toper not found", 404);
    return successResponse(res, "Toper fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await ToperService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Toper not found", 404);
    return successResponse(res, "Toper fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};


