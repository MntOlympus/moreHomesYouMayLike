const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const port = 3009;
const { getOneEntry } = require('../database/calls');

app.use(express.static(__dirname + '/../public'));

app.get('/recommendations', function(req, res) {

  //currently fetches records _ids 1-8
  getSet((err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });

});

app.listen(port, () => console.log(`matrix consolidating on port ${port}!`))