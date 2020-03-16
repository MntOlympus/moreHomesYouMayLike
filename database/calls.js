const mongoose = require('mongoose');
var dbName = 'seedTest';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;

//form for each recommended home according to data displayed on widget
//_________________________________________________
let casaSchema = new Schema({
  _id: Number,
  title: String,
  space: {
    occupancy: String,
    type: String,
    bedCount: Number
  },
  rate: {
    price: Number,
    timeframe: String,
  },
  review: {
    stars: Number,
    reviewers: Number,
  },
  description: String,
  images: Array
},

  { typeKey: '$type' } //needed so that for when generating from a mongoose schema, it does not try to convert an object at a property to a string.

);

let Casa = mongoose.model('Casa', casaSchema);

//for sample API call
//_________________________________________________
getOneEntry = function(callback) {
  var query  = Casa.where({ _id: 19 });
  query.findOne(function (err, casa) {
    if (err) return handleError(err);
    if (casa) {
      callback(null, casa);
    }
  });
};

module.exports = {getOneEntry, Casa};
