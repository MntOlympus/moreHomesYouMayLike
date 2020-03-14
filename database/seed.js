const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seedTest2', {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;
//________________________________
//    generate fakes
var faker = require('faker');
//________________________________

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
//_________________________________________________


//populate the database with 100 random entries with id's 1 - 100
//_________________________________________________

handleError = function(err) {
  console.log('full database population failed.');
}

populate = function() {
  for (var i = 1; i < 101; i++) {
    var casa = new Casa({
      _id: i,
      title: faker.hacker.phrase(),
      space: {
        occupancy: faker.random.word(),
        type: faker.random.word(),
        bedCount: faker.random.number()
      },
      rate: {
        price: faker.random.number(),
        timeframe: faker.random.word(),
      },
      review: {
        stars: faker.random.number(),
        reviewers: faker.random.number(),
      },
      description: faker.random.word(),
      images: ['AWS(url.1)', 'AWS(url.2)', '...etc']
    });

    casa.save()
      .then(() => console.log('...data saved to DB'))
      .catch(err => handleError(err));
  };
}

populate();

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

module.exports = {getOneEntry};

