var mongoose = require('mongoose');
// defines the TodoItem schema
var TodoItemSchema = {
    name: String,
    purchased: Boolean,
    id: String
};

var TodoItem = mongoose.model('TodoItem', TodoItemSchema, "todoItems");

module.exports = TodoItem;