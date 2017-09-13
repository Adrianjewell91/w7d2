import React from 'react';
import ReactDOM from 'react-dom';
import { postTodo } from './util/todo_api_util';
import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo, fetchTodos } from "./actions/todo_actions";
import Root from "./components/root";

import allTodos from "./reducers/selectors";


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));

  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.postTodo = postTodo;

  window.fetchTodos = fetchTodos;
  window.store = store;

  window.allTodos = allTodos;
});
