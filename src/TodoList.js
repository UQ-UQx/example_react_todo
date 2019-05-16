import React, { Component } from "react";

import { connect } from "react-redux";

import { toggle_todo_complete } from './actions'

class TodoList extends Component {
  render() {
    const { todos, updateTodo, toggleTodo } = this.props;

    console.log(todos);

    return (
      <div>
        <div>
          <h2>To Complete</h2>
          {todos.map(todo => {
            if (!todo.checked) {
              return (
                <div key={todo.id}>
                  <input
                    checked={todo.checked}
                    type="checkbox"
                    onChange={e => {
                        toggleTodo(todo.id);
                    }}
                  />{" "}
                  {todo.todo} <br />
                </div>
              );
            }
          })}
        </div>
        <div>
          <h2>Completed</h2>
          {todos.map(todo => {
            if (todo.checked) {
              return (
                <div key={todo.id}>
                  <input
                    checked={todo.checked}
                    type="checkbox"
                    onChange={e => {
                        toggleTodo(todo.id);
                    }}
                  />{" "}
                  {todo.todo} <br />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  reduxState => {
    return {
      todos: reduxState.todoList
    };
  },
  {
    toggleTodo: toggle_todo_complete
  }
)(TodoList);
