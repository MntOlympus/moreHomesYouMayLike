const mongoose = require('mongoose');
var dbName = 'seedTest'
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
const { Casa } = require('./calls');
//________________________________
//    generate fakes
var faker = require('faker');
//________________________________



//populate the database with 100 random entries with id's 1 - 100
//_________________________________________________

handleError = function(err) {

  console.log('Database error below:');
  console.log('\n');
  console.error(err);
  console.log('\n');
  throw new Error('full database population failed.\n');

}

populate = function() {

  mongoose.connect(`mongodb://localhost/${dbName}`, function() {
    /* Drop the DB to re-seed it with new data*/
    mongoose.connection.db.dropDatabase();
  });

  for (var i = 1; i < 101; i++) {

    //defining type of rental for type of space
    var spaceTypes = ['entire', 'private', 'shared'];
    var occRandom = Math.floor(Math.random() * 2);
    var occupancyType = spaceTypes[occRandom];
    //_________________________________________________

    //defining timeframe for clarity
    var timeTypes = ['nightly', 'weekly', 'monthly'];
    var timeRandom = Math.floor(Math.random() * 2);
    var timeframeType = timeTypes[timeRandom];
    //_________________________________________________

    var casa = new Casa({
      _id: i,
      title: faker.hacker.phrase(),
      space: {
        occupancy: occupancyType,
        type: faker.random.word(),
        bedCount: faker.random.number($nbDigits = 9, $strict = true)
      },
      rate: {
        price: faker.random.number($nbDigits = 9999, $strict = true),
        timeframe: timeframeType
      },
      review: {
        stars: faker.random.number($nbDigits = 5, $strict = true),
        reviewers: faker.random.number($nbDigits = 20000, $strict = true)
      },
      description: faker.hacker.phrase(),
      images: ['AWS(url.1)', 'AWS(url.2)', '...etc']
    });

    casa.save(function (err) {
      if (err) return handleError(err);
    });
  }
};

populate();
console.log('database seeded.');

