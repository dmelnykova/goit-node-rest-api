const controllerWrapper = require("../helpers/controllerWrapper");
const authMiddleware = require("./authMiddleware");
const upload = require("./upload");

module.exports = {
  authMiddleware: controllerWrapper(authMiddleware),
  upload,
};