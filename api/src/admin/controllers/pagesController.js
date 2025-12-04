const PagesService = require("../services/pagesService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
    try {
        const cartItems = await PagesService.getAll(req.query);
        return successResponse(res, "Cart items fetched successfully", cartItems);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const cartItem = await PagesService.getById(req.params.id);
        if (!cartItem) return errorResponse(res, "Cart item not found", 404);
        return successResponse(res, "Cart item fetched successfully", cartItem);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const cartItem = await PagesService.getByIdForUpdate(req.params.id);
        if (!cartItem) return errorResponse(res, "Cart item not found", 404);
        return successResponse(res, "Cart item fetched successfully for update", cartItem);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await PagesService.create(req.body);
        return successResponse(res, "Cart item added successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await PagesService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Cart item not found or not updated", 404);
        return successResponse(res, "Cart item updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await PagesService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Cart item not found or not deleted", 404);
        return successResponse(res, "Cart item deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
