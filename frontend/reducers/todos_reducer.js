import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};

      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;

    case RECEIVE_TODO:
      const todoId = action.todo.id;
      const newObject = {[todoId]: action.todo};
      const nState = merge(newObject, state);
      return nState;

    default:
        return state;
  }
};

export default todosReducer;
