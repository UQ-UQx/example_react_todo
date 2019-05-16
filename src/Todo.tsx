import React, { Component } from "react";

import TodoList from "./TodoList";
import uuid from "uuid/v4";
import { connect } from "react-redux";

import { HeaderContainer } from "./TodoStyles";

import { add_todo } from "./actions";

import { add_todo_type } from 'OwnReduxTypes'

interface State {
  inputValue: string;
}

interface OwnProps {
  name: string;
  age: number;
}

interface ReduxStateProps {}

interface DispatchProps {
  reduxAddTodo: add_todo_type;
}

type Props = DispatchProps & ReduxStateProps & OwnProps;

class Todo extends Component<Props, State> {
  state = {
    inputValue: ""
  };

  render() {
    console.log(this.props);

    const { reduxAddTodo } = this.props;

    return (
      <div>
        <HeaderContainer>todo component</HeaderContainer>
        <br />

        <input
          value={this.state.inputValue}
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
        />

        <button
          onClick={() => {
            reduxAddTodo(uuid(), this.state.inputValue);
          }}
        >
          Submit Todo
        </button>

        <TodoList />
      </div>
    );
  }
}

export default connect<ReduxStateProps, DispatchProps, OwnProps>(
  state => {
    return {};
  },
  {
    reduxAddTodo: add_todo
  }
)(Todo);

/*


[
    {
        id: ...
        todo: ...
        checked: true
    },
    {
        id: ...
        todo: ...
        checked: false

    },
]


*/
