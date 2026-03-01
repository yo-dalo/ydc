const BranchService = require("../services/branchService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await BranchService.getAll(req.query);
    return successResponse(res, "Branch fetched successfully", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await BranchService.getById(req.params.id);
    if (!item) return errorResponse(res, "Branch not found", 404);
    return successResponse(res, "Branch fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await BranchService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Branch not found", 404);
    return successResponse(res, "Branch fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await BranchService.create(req.body);
    return successResponse(res, "Branch added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await BranchService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Branch not found", 404);
    return successResponse(res, "Branch updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await BranchService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Branch not found", 404);
    return successResponse(res, "Branch deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
