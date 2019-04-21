var express = require('express');
var app = express();

app.get(['/', '/index.html'], function(req, res) {
  res.send('Hello');
});

app.listen(3006);
