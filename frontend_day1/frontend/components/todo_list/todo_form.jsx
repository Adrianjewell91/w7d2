import React from "react";
import uniqId from "../../util/util";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  handleEvent(event) {
    event.preventDefault();

    const newId = uniqId();
    this.props.receiveTodo({id: newId,
                      title: this.state.title,
                      body: this.state.body,
                      done: false
                    });
  }

  updateInfo(event) {
    event.preventDefault();

    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEvent}>
          <label>Title
            <input type="text" id="title" onChange={this.updateInfo}></input>
          </label>
          <label>Body
            <input type="text" id="body" onChange={this.updateInfo}></input>
          </label>
          <button>Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
