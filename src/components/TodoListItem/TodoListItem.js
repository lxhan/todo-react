import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {
  render() {
    const { done, important, label, onDelete, onToggleDone, onToggleImportant } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span onClick={onToggleDone} className="todo-list-item-label">
          {label}
        </span>

        <button
          onClick={onToggleImportant}
          type="button"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button
          onClick={onDelete}
          type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
