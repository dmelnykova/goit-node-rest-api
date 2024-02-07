const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers/HttpError");


const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsServices.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports =  deleteContact;