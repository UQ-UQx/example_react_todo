export const Actions = {
  ADD_TODO: "ADD_TODO",
  SET_TODO_COMPLETE: "SET_TODO_COMPLETE"
};


const add_todo = (id:string, todo:string ) => {
  return {
    type: Actions.ADD_TODO,
    payload: {
      id,
      todo
    }
  };
};

const toggle_todo_complete = (id:string) => {
  return {
    type: Actions.SET_TODO_COMPLETE,
    payload: {
      id
    }
  };
};

export { add_todo, toggle_todo_complete };
