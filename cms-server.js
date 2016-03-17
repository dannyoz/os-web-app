var express = require('express'),
    http = require('http');

var app = express();
var server = app.listen(2000);



app.configure(function(){
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/cms'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler());
  app.use(allowCrossDomain); 
  app.use(app.router);
});

app.all('*', function(req, res) {
    res.sendfile('./cms/index.html');
});

console.log("Express server listening on port 2000");