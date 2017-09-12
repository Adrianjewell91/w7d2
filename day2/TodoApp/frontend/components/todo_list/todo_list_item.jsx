import React from 'react';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.renderDone = this.renderDone.bind(this);
  }


  remove(event){
    event.preventDefault();
    // debugger
    this.props.removeTodo(this.props.id);
  }

  updateTodo(event) {
    // debugger
    event.preventDefault();
    this.props.receiveTodo({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      done: (!this.props.done)
    });
  }

  renderDone() {
    if (this.props.done) {
      return "Done";
    } else {
      return "Not Done!";
    }
  }

  render() {
    return (
      <li>{this.props.title}
        <button onClick={this.remove}>Delete</button>
        <button onClick={this.updateTodo}>{this.renderDone()}</button>
      </li>
    );
  }
}
export default TodoListItem;
