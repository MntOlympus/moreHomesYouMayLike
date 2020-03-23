const mongoose = require('mongoose');
var dbName = 'recommendations';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;

//form for each recommended home according to data displayed on widget
//_________________________________________________
let casaSchema = new Schema({
  index: Number,
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


getSet = function(callback) {

  //logic sets up 13 sets of eight different home objects in database
  var setIndex = Math.floor(Math.random() * 13)
  var ids = [ ...Array(8).keys() ].map( i => i + 1);
  var shiftSet = 8 * setIndex;
  var idSet = ids.map(i => i + shiftSet);
  //_________________________________________________________________

  Casa.find().where('index').in(idSet).exec((err, records) => {
    if (err) {
      console.log(err)
    }
    callback(null, records);
  });
}

module.exports = {getSet, Casa};
