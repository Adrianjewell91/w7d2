import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
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
      return merge({}, state, newObject);
    case REMOVE_TODO:
    // debugger
      const remainingTodos = {};

      Object.keys(state).forEach((key) => {
        if (parseInt(key) !== action.id) {
          remainingTodos[key] = state[key];
        }
      });

      return remainingTodos;
    default:
        return state;
  }
};

export default todosReducer;
