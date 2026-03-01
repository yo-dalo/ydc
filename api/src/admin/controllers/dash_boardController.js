const Dash_boardService = require("../services/dash_boardService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await Dash_boardService.getAll();

    return successResponse(res, "Dashboard fetched successfully", result);
  } catch (error) {
    console.error("Error in dashboardController.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

// exports.getById = async (req, res) => {
//   try {
//     const item = await BlogService.getById(req.params.id);
//     if (!item) return errorResponse(res, "Blog not found", 404);
//     return successResponse(res, "Blog fetched successfully", item);
//   } catch (error) {
//     return errorResponse(res, error.message);
//   }
// };

// exports.getForUpdate = async (req, res) => {
//   try {
//     const item = await BlogService.getForUpdate(req.params.id);
//     if (!item) return errorResponse(res, "Blog not found", 404);
//     return successResponse(res, "Blog fetched successfully", item);
//   } catch (error) {
//     return errorResponse(res, error.message);
//   }
// };

// exports.create = async (req, res) => {
 
//   try {
//     const id = await BlogService.create(req.body, req.file?.filename);
//     return successResponse(res, "Blog added successfully", { id }, 201);
//   } catch (error) {
//     return errorResponse(res, error.message);
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const updated = await BlogService.update(req.params.id, req.body, req.file?.filename);
//     if (!updated) return errorResponse(res, "Blog not found or no changes made", 404);
//     return successResponse(res, "Blog updated successfully");
//   } catch (error) {
//     return errorResponse(res, error.message);
//   }
// };

// exports.delete = async (req, res) => {
//   try {
//     const deleted = await BlogService.delete(req.params.id);
//     if (!deleted) return errorResponse(res, "Blog not found", 404);
//     return successResponse(res, "Blog deleted successfully");
//   } catch (error) {
//     return errorResponse(res, error.message);
//   }
// };
