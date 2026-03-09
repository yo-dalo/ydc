const AdmissionOpenMessageService = require("../services/admission_open_messageService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await AdmissionOpenMessageService.getAll(req.query);
    return successResponse(res, "Admission Open Message fetched successfully", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await AdmissionOpenMessageService.getById(req.params.id);
    if (!item) return errorResponse(res, "Admission Open Message not found", 404);
    return successResponse(res, "Admission Open Message fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await AdmissionOpenMessageService.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "Admission Open Message not found", 404);
    return successResponse(res, "Admission Open Message fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await AdmissionOpenMessageService.create(req.body);
    return successResponse(res, "Admission Open Message added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await AdmissionOpenMessageService.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "Admission Open Message not found", 404);
    return successResponse(res, "Admission Open Message updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await AdmissionOpenMessageService.delete(req.params.id);
    if (!deleted) return errorResponse(res, "Admission Open Message not found", 404);
    return successResponse(res, "Admission Open Message deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
