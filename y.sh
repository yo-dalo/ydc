#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if model name is provided
if [ -z "$1" ] || [ -z "$2" ]; then
    echo -e "${RED}Error: Model name path  required!${NC}"
   echo "Usage: ./generate-routes.sh <model_name> <folder_path>"
    echo "Example: ./generate-routes.sh admission ../api/client"
    exit 1
fi

MODEL_NAME=$1
BASE_PATH=$2

MODEL_NAME_LOWER=$(echo "$MODEL_NAME" | tr '[:upper:]' '[:lower:]')
MODEL_NAME_CAMEL=$(echo "$MODEL_NAME_LOWER" | sed 's/_\(.\)/\U\1/g' | sed 's/^\(.\)/\U\1/')


echo -e "${YELLOW}Model: $MODEL_NAME${NC}"
echo -e "${YELLOW}Base Path: $BASE_PATH${NC}"

# Create directories if they don't exist
if [ ! -d "$BASE_PATH" ]; then
    echo -e "${YELLOW}⚠ Folder exist nahi karta, create kiya ja raha hai...${NC}"
    mkdir -p "$BASE_PATH"
    echo -e "${GREEN}✓ Folder created: $BASE_PATH${NC}"
fi

# Create sub folders
mkdir -p "$BASE_PATH/routes"
mkdir -p "$BASE_PATH/controllers"
mkdir -p "$BASE_PATH/services"




# 1. Generate Route File
ROUTE_FILE="$BASE_PATH/routes/${MODEL_NAME_LOWER}Routes.js"
echo -e "${GREEN}Creating: $ROUTE_FILE${NC}"

cat > "$ROUTE_FILE" << 'EOF'
const express = require("express");
const router = express.Router();
const CONTROLLER_NAME = require("../controllers/CONTROLLER_FILE");

router.get("/", CONTROLLER_NAME.getAll);
router.get("/:id", CONTROLLER_NAME.getById);
router.get("/for-update/:id", CONTROLLER_NAME.getForUpdate);
router.post("/", CONTROLLER_NAME.create);
router.put("/:id", CONTROLLER_NAME.update);
router.delete("/:id", CONTROLLER_NAME.delete);

module.exports = router;
EOF

sed -i "s/CONTROLLER_NAME/${MODEL_NAME_LOWER}Controller/g" "$ROUTE_FILE"
sed -i "s/CONTROLLER_FILE/${MODEL_NAME_LOWER}Controller/g" "$ROUTE_FILE"

# 2. Generate Controller File
CONTROLLER_FILE="$BASE_PATH/controllers/${MODEL_NAME_LOWER}Controller.js"
echo -e "${GREEN}Creating: $CONTROLLER_FILE${NC}"

cat > "$CONTROLLER_FILE" << 'EOF'
const SERVICE_CLASS = require("../services/SERVICE_FILE");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await SERVICE_CLASS.getAll({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      sortBy: req.query.sortBy || "Id",
      sortOrder: req.query.sortOrder || "DESC",
      isActive: req.query.isActive,
      indexNo: req.query.indexNo,
    });

    return successResponse(res, "DISPLAY_NAME fetched successfully", result);
  } catch (error) {
    console.error("Error in CONTROLLER_NAME.getAll:", error);
    return errorResponse(res, error.message || "Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await SERVICE_CLASS.getById(req.params.id);
    if (!item) return errorResponse(res, "DISPLAY_NAME not found", 404);
    return successResponse(res, "DISPLAY_NAME fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.getForUpdate = async (req, res) => {
  try {
    const item = await SERVICE_CLASS.getForUpdate(req.params.id);
    if (!item) return errorResponse(res, "DISPLAY_NAME not found", 404);
    return successResponse(res, "DISPLAY_NAME fetched successfully", item);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const id = await SERVICE_CLASS.create(req.body);
    return successResponse(res, "DISPLAY_NAME added successfully", { id }, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await SERVICE_CLASS.update(req.params.id, req.body);
    if (!updated) return errorResponse(res, "DISPLAY_NAME not found or no changes made", 404);
    return successResponse(res, "DISPLAY_NAME updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await SERVICE_CLASS.delete(req.params.id);
    if (!deleted) return errorResponse(res, "DISPLAY_NAME not found", 404);
    return successResponse(res, "DISPLAY_NAME deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
EOF

DISPLAY_NAME=$(echo "$MODEL_NAME_LOWER" | sed 's/_/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')
sed -i "s/SERVICE_CLASS/${MODEL_NAME_CAMEL}Service/g" "$CONTROLLER_FILE"
sed -i "s/SERVICE_FILE/${MODEL_NAME_LOWER}Service/g" "$CONTROLLER_FILE"
sed -i "s/CONTROLLER_NAME/${MODEL_NAME_LOWER}Controller/g" "$CONTROLLER_FILE"
sed -i "s/DISPLAY_NAME/$DISPLAY_NAME/g" "$CONTROLLER_FILE"

# 3. Generate Service File
SERVICE_FILE="$BASE_PATH/services/${MODEL_NAME_LOWER}Service.js"
echo -e "${GREEN}Creating: $SERVICE_FILE${NC}"

cat > "$SERVICE_FILE" << 'EOF'
const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");
const { Op } = require("sequelize");

const models = initModels(sequelize);
const { MODEL_NAME } = models;

class SERVICE_CLASS {
  static async getAll({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "Id",
    sortOrder = "DESC",
    isActive = null,
    indexNo = null,
  } = {}) {
    const offset = (page - 1) * limit;
    const where = {};

    // Search functionality
    if (search) {
      where[Op.or] = [
        { Name: { [Op.like]: `%${search}%` } },
      ];
    }

    // Filter by Is_Active
    if (isActive === "active" || isActive === "inactive") {
      where.Is_Active = isActive;
    }

    // Filter by Index_No
    if (indexNo !== null && indexNo !== "") {
      where.Index_No = indexNo;
    }

    const { count, rows } = await MODEL_NAME.findAndCountAll({
      where,
      offset,
      limit: parseInt(limit),
      order: [[sortBy, sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC"]],
    });

    return {
      data: rows,
      pagination: {
        total: count,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(count / limit),
      },
      filters: {
        search,
        isActive,
        indexNo,
        sortBy,
        sortOrder,
      },
    };
  }

  static async getById(id) {
    return await MODEL_NAME.findByPk(id);
  }

  static async create(data) {
    const created = await MODEL_NAME.create(data);
    return created ? created.Id || created.id || created.get("Id") : null;
  }

  static async update(id, data) {
    const [affected] = await MODEL_NAME.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async getForUpdate(id) {
    return await MODEL_NAME.findByPk(id);
  }

  static async delete(id) {
    const deleted = await MODEL_NAME.destroy({ where: { Id: id } });
    return deleted > 0;
  }
}

module.exports = SERVICE_CLASS;
EOF

sed -i "s/MODEL_NAME/${MODEL_NAME_LOWER}/g" "$SERVICE_FILE"
sed -i "s/SERVICE_CLASS/${MODEL_NAME_CAMEL}Service/g" "$SERVICE_FILE"

echo -e "${GREEN}✓ Route file created: $ROUTE_FILE${NC}"
echo -e "${GREEN}✓ Controller file created: $CONTROLLER_FILE${NC}"
echo -e "${GREEN}✓ Service file created: $SERVICE_FILE${NC}"

# 4. Update index.js

INDEX_FILE="$BASE_PATH/routes/index.js"
echo $INDEX_FILE

ROUTE_VAR="${MODEL_NAME_LOWER}Routes"
ROUTE_IMPORT="const ${ROUTE_VAR} = require('./${MODEL_NAME_LOWER}Routes');"
ROUTE_USE="router.use('/${MODEL_NAME_LOWER}', ${ROUTE_VAR});"

echo -e "${YELLOW}Updating: $INDEX_FILE${NC}"

# Agar index.js nahi hai to create karo
if [ ! -f "$INDEX_FILE" ]; then
    echo -e "${YELLOW}⚠ index.js nahi mila, create kiya ja raha hai...${NC}"
    cat <<EOF > "$INDEX_FILE"
const express = require('express');
const router = express.Router();

$ROUTE_IMPORT

$ROUTE_USE

module.exports = router;
EOF
    echo -e "${GREEN}✓ index.js created and route added${NC}"
else
    # Agar file hai to check karo route already hai ya nahi
    if grep -q "$ROUTE_VAR" "$INDEX_FILE"; then
        echo -e "${YELLOW}⚠ Route already exists in index.js${NC}"
    else
        sed -i "/const.*require.*Routes');$/a $ROUTE_IMPORT" "$INDEX_FILE"
        sed -i "/module.exports = router;/i $ROUTE_USE" "$INDEX_FILE"
        echo -e "${GREEN}✓ Updated index.js with new route${NC}"
    fi
fi


echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Route generation completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}API Endpoints:${NC}"
echo -e "  GET    /api/${MODEL_NAME_LOWER}/"
echo -e "  GET    /api/${MODEL_NAME_LOWER}/:id"
echo -e "  GET    /api/${MODEL_NAME_LOWER}/for-update/:id"
echo -e "  POST   /api/${MODEL_NAME_LOWER}/"
echo -e "  PUT    /api/${MODEL_NAME_LOWER}/:id"
echo -e "  DELETE /api/${MODEL_NAME_LOWER}/:id"
echo ""