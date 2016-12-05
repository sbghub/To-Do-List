// trying to connect files with components + dispatcher
var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: "todo-item:add",
        })
    },
    delete: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: "todo-item:delete",
        })
    },
    buy: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: "todo-item:buy",
        })
    },
    unbuy: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: "todo-item:unbuy",
        })
    },
}