const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers/HttpError");


const deleteContact = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await contactsServices.removeContact(owner, id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports =  deleteContact;