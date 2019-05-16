import React, { Component } from 'react';

import { connect } from 'react-redux'

class AnotherComponent extends Component {

    render() {

        const { todos } = this.props

        return (
            <div>
                <hr/>
                {todos.map(todo=>{
                    return <div>{todo.todo}</div>
                })}
            </div>
        );
    }
}

export default connect((reduxState)=>{
    return {
        todos: reduxState.todoList
    }
})(AnotherComponent);