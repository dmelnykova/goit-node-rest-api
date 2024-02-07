const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers/HttpError");

const updateStatusContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsServices.updateStatusContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = updateStatusContact;