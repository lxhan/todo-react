import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDelete, onToggleDone, onToggleImportant }) => {
  const els = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{els}</ul>;
};

export default TodoList;
