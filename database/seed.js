const mongoose = require('mongoose');
var dbName = 'seedTest'

//-------------establish connection---------------------
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", function() {
console.log("*** MongoDB connected ***");
console.log(`Our Current Database Name : ${connection.db.databaseName}`);
});
//------------------------------------------------------
//import model
const { Casa } = require('./calls');

//___________generates fakes______
var faker = require('faker');
//________________________________


//populate the database with 100 random entries with id's 1 - 100
//_________________________________________________

handleError = function(err) {

  console.log('\n');
  console.log('Database error log below:');
  console.log('\n');
  console.error(err);
  console.log('\n');
  throw new Error('full database population and/or re-seeding failed.\n');

}

var image = 'https://cdn1.artstation.com/p/assets/images/images/001/139/545/large/liam-reid-liam-reid-hackerroom.jpg?1440869455';

populate = function() {

  //drop database for re-seeding
  connection.once("open", function() {
    mongoose.connection.db.dropDatabase(
    console.log(`clearing current entries`)
    );
  });

  for (var i = 1; i < 101; i++) {

    //defining type of rental for type of space
    var spaceTypes = ['entire', 'private', 'shared'];
    var occRandom = Math.floor(Math.random() * 3);
    var occupancyType = spaceTypes[occRandom];
    //_________________________________________________

    //defining timeframe for clarity
    var timeTypes = ['nightly', 'weekly', 'monthly'];
    var timeRandom = Math.floor(Math.random() * 3);
    var timeframeType = timeTypes[timeRandom];
    //_________________________________________________

    var casa = new Casa({
      index: i,
      title: faker.lorem.sentence(),
      space: {
        occupancy: occupancyType,
        type: faker.random.word(),
        bedCount: faker.random.number($nbDigits = 9, $strict = true)
      },
      rate: {
        price: faker.random.number($nbDigits = 999, $strict = true),
        timeframe: timeframeType
      },
      review: {
        stars: faker.random.number($nbDigits = 5, $strict = true),
        reviewers: faker.random.number($nbDigits = 2000, $strict = true)
      },
      description: faker.hacker.phrase(),
      images: [image]
    });

    casa.save(function (err) {
      if (err) {
        return handleError(err);
      }
    });
  }

  //gives time to throw error and stop process
  setTimeout(() => {
    console.log('database seeded.');
  }, 2000);

};

populate();



