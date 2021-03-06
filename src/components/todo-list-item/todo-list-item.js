import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  /*
  state = {
    done: false,
    important: false,
  };
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };
  // Use this construction to chage state keys. Because setState() could be async
  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };
  */

  render() {
    const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;
    /*const { done, important } = this.state;*/

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fas fa-exclamation"/>
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fas fa-trash" />
        </button>
      </span>
    );
  }
}