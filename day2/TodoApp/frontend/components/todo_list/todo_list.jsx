import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";









const TodoList = ({ todos, receiveTodo, removeTodo}) => {
  return (
    <div>
      <TodoForm receiveTodo={receiveTodo}/>
      <ul>
        {
          todos.map((todo,id) => <TodoListItem key={id + todo.title}
                                            title={todo.title}
                                            id={todo.id}
                                            body={todo.body}
                                            done={todo.done}
                                            removeTodo={removeTodo}
                                            receiveTodo={receiveTodo}/>)
                                          }
      </ul>
    </div>
  );
};

export default TodoList;
