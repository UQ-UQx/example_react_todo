import { combineReducers } from "redux";

import { Actions } from '../actions'

const todoListReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
      case Actions.ADD_TODO:
        return [
          ...state,
          {
            id: payload.id,
            todo: payload.todo,
            checked: false
          }
        ];
      case Actions.SET_TODO_COMPLETE:
        return state.map(todo => {
            if(todo.id === payload.id){
                return {
                    ...todo,
                    checked: !todo.checked
                }
            }
            return todo
        })
      default:
        return state;
    }
  }

  

export default combineReducers({
  todoList: todoListReducer
});
