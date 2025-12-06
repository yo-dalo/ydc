const AuthService = require("../services/authService");
const { successResponse, errorResponse } = require("../../utils/response");
const {adminCookieName,adminJwtSecret} = require("../../config/env")
const jwt = require('jsonwebtoken');


const production = false; // local me false, production me true

exports.login = async (req, res) => {
  try {
    const item = await AuthService.login(req.body);
    if (!item) return errorResponse(res, "Invalid credentials", 401);

    // JWT token
    const token = jwt.sign(
      { id: item.id, Email: item.Email },
      adminJwtSecret,
      { expiresIn: '1d' }
    );

    // Set cookie
    res.cookie(adminCookieName, token, {  // <-- yaha 'token' use karo, data.token nahi
      path: '/',
      httpOnly: false,  // production ? true : false
      secure: production,
      sameSite: production ? 'None' : 'Lax',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return successResponse(res, "Login successful", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.register = async (req, res) => {
  try {
    const item = await AuthService.register(req.body); // <-- req.params.id galat tha, yaha req.body
    if (!item) return errorResponse(res, "Registration failed", 400);
    return successResponse(res, "Registered successfully", { id: item });
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.is_logined = async (req, res) => {
  try {
    const id = req.admin.id;
    const user = await AuthService.is_logined(id);
    if (!user) return errorResponse(res, "User not found", 404);
    return successResponse(res, "User is logged in", { user });
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
