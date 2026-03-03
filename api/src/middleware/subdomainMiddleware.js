// middleware/checkBranchFromQuery.js

const initModels = require("../models/init-models");
const sequelize = require("../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { branch } = models;

const checkBranch = async (req, res, next) => {
    try {
        const host = req.headers.host;

        if (!host) {
            return res.status(400).json({ message: "Host not found" });
        }

        const hostname = host.split(":")[0];
        const parts = hostname.split(".");

        if (parts.length < 2) {
            return res.status(400).json({ message: "Subdomain not found" });
        }

        const subdomain = parts[0];

        if (!subdomain) {
            return res.status(400).json({ message: "Subdomain not found" });
        }

        const branchData = await branch.findOne({
            where: { Sub_Domain: subdomain }
        });

        if (!branchData) {
            return res.status(400).json({ message: "Subdomain not found in db" });
        }

        req.subdomain = {
            Branch_Id: branchData.Id,
            subdomain: branchData.Sub_Domain
        };


        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = checkBranch;