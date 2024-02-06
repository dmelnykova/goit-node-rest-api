const express = require("express");
const contactsControllers = require("../controllers/contactsControllers");
const validateBody = require("../helpers/validateBody.js");
const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require('../schemas/contactsSchemas.js');

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", contactsControllers.getOneContact);

contactsRouter.delete("/:id", contactsControllers.deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), contactsControllers.createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), contactsControllers.updateContact);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  contactsControllers.updateStatusContact
);

module.exports = contactsRouter;
