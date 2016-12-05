/*
* react has its own dispatcher also - but would rather make own
* need to install guid for react/flux to work
* guid - creates id for every item
*/

var guid = require('guid');
var listeners = {};

module.exports = {
    register: function (cb) {
        var id = guid.raw();
        listeners[id] = cb;
        return id;
    },
    dispatch:function(payload){
        console.info("Dispatching...",payload);
        for (var id in listeners){
            var listener = listeners[id];
            listener(payload);
        }
    }
}
