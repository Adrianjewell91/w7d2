import React from 'react';


const TodoListItem = ({title,id, removeTodo }) => (
  <li>{title} <button onClick={removeTodo(id)}>Delete</button></li>
);

export default TodoListItem;
