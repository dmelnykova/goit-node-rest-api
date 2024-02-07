const contactsServices = require("../../services/contactsServices");
const { HttpError } = require("../../helpers/HttpError");


const createContact = async (req, res, next) => {
  const result = await contactsServices.addContact(req.body);
  res.status(201).json(result);
};

module.exports = createContact;