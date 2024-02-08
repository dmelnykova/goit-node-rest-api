const { controllerWrapper } = require("../../helpers/controllerWrapper");
const getInfo = require("./getInfo");
const login = require("./login");
const logout = require("./logout");
const registration = require("./registration");

module.exports = {
  registration: controllerWrapper(registration),
  login: controllerWrapper(login),
  logout: controllerWrapper(logout),
  getInfo: controllerWrapper(getInfo),
  updateSubscription: controllerWrapper(updateSubscription),
};
