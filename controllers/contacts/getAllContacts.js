const contactsServices = require("../../services/contactsServices");

const getAllContacts = async (req, res, next) => {
  const result = await contactsServices.listContacts();
  res.json(result);
};

module.exports = getAllContacts;