const { controllerWrapper } = require("../../helpers");
const getInfo = require("./getInfo");
const login = require("./login");
const logout = require("./logout");
const registration = require("./registration");
const resendVerifyEmail = require("./resendVerifyEmail");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");

module.exports = {
  registration: controllerWrapper(registration),
  login: controllerWrapper(login),
  logout: controllerWrapper(logout),
  getInfo: controllerWrapper(getInfo),
  updateSubscription: controllerWrapper(updateSubscription),
  updateAvatar: controllerWrapper(updateAvatar),
  verifyEmail: controllerWrapper(verifyEmail),
  resendVerifyEmail: controllerWrapper(resendVerifyEmail),
};