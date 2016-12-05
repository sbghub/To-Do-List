var React = require('react/addons');
var TodoItem = require('./TodoItem.jsx');
var TodoListAddItem = require('./TodoListAddItem.jsx')

module.exports = React.createClass({
    render: function () {
        return(
            <div>
                <h1>Todo List-ify</h1>
                <div>
                    {this.props.items.map(function (item, index) {
                        return(
                            <TodoItem item={item} key={"item" + index} />
                        )
                    })}
                </div>
                <TodoListAddItem/>
            </div>
        )
    }
});