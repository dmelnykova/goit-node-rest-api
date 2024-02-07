const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers/HttpError");

const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsServices.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = updateContact;