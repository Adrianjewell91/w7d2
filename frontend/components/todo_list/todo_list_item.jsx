import React from 'react';


const TodoListItem = ({title,id, removeTodo }) => (
  <li>{title} <button>Delete</button></li>
);

export default TodoListItem;
