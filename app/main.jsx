var React = require('react/addons');
console.log("ARRGH!!!");

var TodoItemList = require('./components/TodoItemList.jsx');

var TodoItemStore = require('./stores/TodoItemStore.jsx');
var initial = TodoItemStore.getItems();

function render() {
    React.render(<TodoItemList items={initial}/>, app)
}

TodoItemStore.onChange(function (items) {
    initial = items;
    render();
})

render();