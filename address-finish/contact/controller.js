var Contact = require('./model');

module.exports = {
  listContacts: (req, res) => {
    Contact.find().then(records => res.send(records));
  },

  createContact: (req, res) => {
    var contact = new Contact(req.body);
    contact.save()
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
  }
}