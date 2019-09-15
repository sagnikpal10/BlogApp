var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log('Nope ',err);
    }
    else{
        console.log(config.secret);
        console.log('Yep'+config.db);
    }
});

app.use(express.static(__dirname + '/client/dist'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
  })
  
  app.listen(8080, function(){
      console.log("listening to posrt 8080");
  });