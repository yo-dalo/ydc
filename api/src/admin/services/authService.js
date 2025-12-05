const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { admins } = models;

class AuthService {
  static async login(data) {
    // Determine whether data.User is email or username




    const whereClause = {};
    if (data.User.includes('@')) {
      whereClause.Email = data.User;
    } else {
      whereClause.Username = data.User;
    }

    const user = await admins.findOne({ where: whereClause });

    if (!user) return null;

    const match = await bcrypt.compare(data.Password, user.Password);
    if (!match) return null;

    return {
      id: user.Id,
      Name: user.Name,
      Email: user.Email,
      Username: user.Username
    };
  }

  static async register(data) {
    const hash = await bcrypt.hash(data.Password, 12);

    const created = await admins.create({
      Name: data.Name,
      Email: data.Email,
      Password: hash,
      Username: data.Userrname 
    });

    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async is_logined(id) {
    return await admins.findByPk(id);
  }
}

module.exports = AuthService;
