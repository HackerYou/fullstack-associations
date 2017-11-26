var mongoose = require('mongoose');
var AddressSchema = require('../address/schema');

var ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: AddressSchema
});

module.exports = mongoose.model('Contact', ContactSchema);