var express = require('express');
var app = new express();
var parser = require('body-parser');
// require database script
require('./database.js');

app.get('/', function(req,res){
    res.render('./../app/index.ejs', {});
})
    .use(express.static(__dirname + '/../.tmp'))
    .listen(7777);

app.use(parser.json());
// allows handling of post requests from express
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);