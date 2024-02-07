const { HttpError } = require("../../helpers/HttpError");
const contactsServices = require("../../services/contactsServices");

const getOneContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsServices.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = getOneContact;