const HttpError = require("../../helpers/HttpError");
const User = require("../../models/usersModels/users");

const getInfo = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const [type, token] = authHeader.split(" ");

  if (!token) {
    throw HttpError(401, "Not authorized");
  }

  const user = await User.findOne({ token });

  if (!user) {
    throw HttpError(401, "Not authorized");
  }

  const { email, subscription } = user;

  res.json({ email, subscription });
};

module.exports = getInfo;
