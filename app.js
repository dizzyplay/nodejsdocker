var express = require('express');
var app = express();

app.get(['/', '/index.html'], function(req, res) {
  res.send('Hello');
});

app.get('/hello',function(req,res){
  res.send(`hello another test...!`)
})
app.listen(3006);
