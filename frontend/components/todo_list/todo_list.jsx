import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = ({ todos, receiveTodo}) => {
  return (
    <div>
      <TodoForm receiveTodo={receiveTodo}/>
      <ul>
        {
          todos.map((todo,idx) => <TodoListItem key={idx + todo.title}
                                            title={todo.title}
                                            idx={idx}/>)
                                          }
      </ul>
    </div>
  );
};

export default TodoList;
