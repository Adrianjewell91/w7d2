import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";



class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <TodoForm createTodo={this.props.createTodo}/>
        <ul>
          {
            this.props.todos.map((todo,id) => <TodoListItem key={id + todo.title}
                                              title={todo.title}
                                              id={todo.id}
                                              body={todo.body}
                                              done={todo.done}
                                              removeTodo={this.props.removeTodo}
                                              createTodo={this.props.createTodo}/>)
                                            }
        </ul>
      </div>
    );
  }
}


export default TodoList;
