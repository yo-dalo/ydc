const fs = require("fs");
const path = require("path");

function deleteImage(imageName) {
  if (!imageName) return;

  const filePath = path.join(__dirname, "../../uploads", imageName);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

module.exports = deleteImage;