const { controllerWrapper } = require("../../helpers/controllerWrapper");
const createContact = require('./createContact');
const getAllContacts = require('./getAllContacts');
const getOneContact = require('./getOneContact');
const deleteContact = require('./deleteContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');

module.exports = {
  createContact,
  getAllContacts,
  getOneContact,
  deleteContact,
  updateContact,
  updateStatusContact,
};
