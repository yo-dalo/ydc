// middleware/checkBranchFromQuery.js

const initModels = require("../models/init-models");
const sequelize = require("../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
//  const { branch } = models;



const checkBranch = (req, res, next) => {
    try {
        const host = req.headers.referer ; // get host from referer or host header
      
          
        // example:
        // hello.localhost:5173
        // branch1.school.com

        if (!host) {
            return res.status(400).json({ message: "Host not found" });
        }

        const hostname = host.split(":")[0]; // remove port
        const parts = hostname.split(".");
        console.log(hostname)

        let subdomain = null;

        // localhost case → hello.localhost
        if (hostname.includes("localhost")) {
            if (parts.length >= 2) {
                subdomain = parts[0]; // hello
            }
        } else {
            // production case → branch1.school.com
            if (parts.length >= 3) {
                subdomain = parts[0]; // branch1
            }
        }

        if (!subdomain) {
            return res.status(400).json({ message: "Subdomain not found" });
        }

        req.subdomain = subdomain;

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = checkBranch;