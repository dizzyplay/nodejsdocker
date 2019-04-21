let express = require('express');
let app = express();

app.get([
  '/',
  '/index.html',
  function(req, res) {
    res.send('Hello');
  },
]);

app.listen(80);
