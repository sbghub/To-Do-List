var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function TodoItemStore() {
    var items = [];
    // items list moved to items.js
    helper.get("api/items")
        .then(function (data) {
            items = data;
            triggerListeners();
        })
    
    var listeners = [];

    function getItems() {return items;}
    function addTodoItem(item) {
        items.push(item);
        triggerListeners();
        helper.post('api/items', item)
    }
    function deleteTodoItem(item) {
        var index = items.indexOf(item)
        items.splice(index,1);
        triggerListeners()
    }
    function onChange(listener) {listeners.push(listener)}
    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(items)
        })
    }
    function setTodoItemDone(item, isDone) {
        var _item = items.filter(function (a) {
            return a.name === item.name
        })[0];
        item.purchased = isDone || false;
        triggerListeners();
    }
    
    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if (split[0] === 'todo-item'){
            switch(split[1]){
                case "add" :
                    addTodoItem(event.payload);
                    break;
                case "delete" :
                    deleteTodoItem(event.payload);
                    break;
                case "buy" :
                    setTodoItemDone(event.payload, true);
                    break;
                case "unbuy" :
                    setTodoItemDone(event.payload, false);
                    break;
            }
        }
    })

    return {
        getItems:getItems,
        onChange:onChange
    }
    
}

module.exports = new TodoItemStore();