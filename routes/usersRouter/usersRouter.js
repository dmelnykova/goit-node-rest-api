const router = require("express").Router();
const {
  registration,
  login,
  logout,
  getInfo,
  updateSubscription,
} = require("../../controllers/usersController");
const { validateBody } = require("../../helpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const {
  createUserSchema,
  loginUserSchema,
  updateUserSubscriptionSchema,
} = require("../../schemas/usersSchemas");

router.post("/register", validateBody(createUserSchema), registration);

router.post("/login", validateBody(loginUserSchema), login);

router.post("/logout", authMiddleware, logout);

router.get("/current", authMiddleware, getInfo);

router.patch(
  "",
  authMiddleware,
  validateBody(updateUserSubscriptionSchema),
  updateSubscription
);

module.exports = router;