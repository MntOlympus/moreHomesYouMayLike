const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const port = 3009;
const getOneEntry = require('../database/seed.js');

app.use(express.static('public'));

app.get('/recommendations', function(req, res) {

  getOneEntry.getOneEntry((err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });

});

app.listen(port, () => console.log(`matrix consolidating on port ${port}!`))