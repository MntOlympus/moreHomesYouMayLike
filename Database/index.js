const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seedTest', {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;

var homeSchema = new Schema({
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
});

const Home = mongoose.model('Home', homeSchema);

const test = new Home();

test._id = 17;
test.rate.price = 901;
test.save().then(() => console.log('we arrived'));

Home.findOne({ 'rate.price': 999 }, function (err, home) {
if (err) {
  console.log(err);
}

console.log('our price is: ' + home.rate.price);
});

