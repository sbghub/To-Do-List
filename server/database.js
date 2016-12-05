// connect to mongoose MongoDB framework
var mongoose = require('mongoose');
var TodoItem = require('./models/TodoItem.js')
// connect to Mongo DB
mongoose.connect('mongodb://localhost/todo', function () {
    console.log("connected...");

    mongoose.connection.db.dropDatabase();

    var items = [{
        name:"Pick Ice Cream"
    },{
        name:"Pick Waffles"
    },{
        name:"Pick Candy",
        purchased:true
    },{
        name:"Pick Snacks"
    }];

    items.forEach(function (item) {
        new TodoItem(item).save();
    })
});