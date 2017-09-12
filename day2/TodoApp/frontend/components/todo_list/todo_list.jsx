import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";



class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
        <ul>
          {
            this.props.todos.map((todo,id) => <TodoListItem key={id + todo.title}
                                              title={todo.title}
                                              id={todo.id}
                                              body={todo.body}
                                              done={todo.done}
                                              removeTodo={this.props.removeTodo}
                                              receiveTodo={this.props.receiveTodo}/>)
                                            }
        </ul>
      </div>
    );
  }
}


export default TodoList;
