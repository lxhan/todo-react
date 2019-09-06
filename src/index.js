import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import ItemFilter from './components/ItemFilter/ItemFilter';
import AddItemBar from './components/AddItemBar';
import './index.css';

class App extends React.Component {
  itemId = 100;
  state = {
    todoData: [
      { id: 1, label: 'buy milk', done: false, important: false },
      { id: 2, label: 'finish bot', done: false, important: false },
    ],
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newData };
    });
  };

  addItem = text => {
    const newItem = {
      id: this.itemId++,
      label: text,
      important: false,
    };

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];
      return {
        todoData: newData,
      };
    });
  };

  toggleProp(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'done'),
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'important'),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <Header todo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar />
          <ItemFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDelete={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItemBar onItemAdd={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
