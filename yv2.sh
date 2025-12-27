#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check args
if [ -z "$1" ] || [ -z "$2" ]; then
    echo -e "${RED}Error: Model name aur folder path dono required hain${NC}"
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

# Create base path if not exists
if [ ! -d "$BASE_PATH" ]; then
    echo -e "${YELLOW}⚠ Folder exist nahi karta, create kiya ja raha hai...${NC}"
    mkdir -p "$BASE_PATH"
    echo -e "${GREEN}✓ Folder created: $BASE_PATH${NC}"
fi

# Create sub folders
mkdir -p "$BASE_PATH/routes"
mkdir -p "$BASE_PATH/controllers"
mkdir -p "$BASE_PATH/services"

# Route file
ROUTE_FILE="$BASE_PATH/routes/${MODEL_NAME_LOWER}Routes.js"
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

# Controller file
CONTROLLER_FILE="$BASE_PATH/controllers/${MODEL_NAME_LOWER}Controller.js"
cat > "$CONTROLLER_FILE" << 'EOF'
const SERVICE_CLASS = require("../services/SERVICE_FILE");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
  try {
    const result = await SERVICE_CLASS.getAll(req.query);
    return successResponse(res, "DISPLAY_NAME fetched successfully", result);
  } catch (error) {
    return errorResponse(res, error.message);
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
    if (!updated) return errorResponse(res, "DISPLAY_NAME not found", 404);
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
sed -i "s/DISPLAY_NAME/$DISPLAY_NAME/g" "$CONTROLLER_FILE"

# Service file
SERVICE_FILE="$BASE_PATH/services/${MODEL_NAME_LOWER}Service.js"
cat > "$SERVICE_FILE" << 'EOF'
const initModels = require("../../models/init-models");
const sequelize = require("../../config/database");

const models = initModels(sequelize);
const { MODEL_NAME } = models;

class SERVICE_CLASS {
  static async getAll() {
    return await MODEL_NAME.findAll();
  }

  static async getById(id) {
    return await MODEL_NAME.findByPk(id);
  }

  static async create(data) {
    const created = await MODEL_NAME.create(data);
    return created ? created.id || created.Id : null;
  }

  static async update(id, data) {
    const [affected] = await MODEL_NAME.update(data, { where: { Id: id } });
    return affected > 0;
  }

  static async delete(id) {
    const deleted = await MODEL_NAME.destroy({ where: { Id: id } });
    return deleted > 0;
  }

  static async getForUpdate(id) {
    return await MODEL_NAME.findByPk(id);
  }
}

module.exports = SERVICE_CLASS;
EOF

sed -i "s/MODEL_NAME/${MODEL_NAME_LOWER}/g" "$SERVICE_FILE"
sed -i "s/SERVICE_CLASS/${MODEL_NAME_CAMEL}Service/g" "$SERVICE_FILE"

echo -e "${GREEN}✓ Routes, Controller, Service created successfully${NC}"
echo -e "${GREEN}Path: $BASE_PATH${NC}"
