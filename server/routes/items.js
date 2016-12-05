module.exports = function (app) {

    var TodoItem = require('./../models/TodoItem.js');



// api - standard practice, symbolzes being able to access JS files
    app.route("/api/items")
    .get(function (req, res) {
        TodoItem.find(function (error, doc) {
            res.send(doc)    
        })
    })
    .post(function (req, res) {
        console.log('adding item---', item);
        var item = req.body;
        // items.push(item)
        var todoItem = new TodoItem(item);
        todoItem.save(function (err, data) {
            res.status(300).send();
        })
    })
}