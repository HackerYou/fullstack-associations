var mongoose = require('mongoose');
var AddressSchema = require('../address/schema');

var CompanySchema = new mongoose.Schema({
  name: String,
  address: AddressSchema
});

module.exports = mongoose.model('Company', CompanySchema);