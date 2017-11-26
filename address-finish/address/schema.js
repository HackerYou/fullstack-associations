var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema({
  address: String,
  city: String,
  province: String,
  country: String,
  postalCode: String
});

module.exports = AddressSchema;