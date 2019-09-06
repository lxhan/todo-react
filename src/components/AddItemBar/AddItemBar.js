import React from 'react';
import './AddItemBar.css';

export default class AddItemBar extends React.Component {
  render() {
    return (
      <div className="item-add-form">
        <button onClick={() => this.props.onItemAdd('test')} className="btn btn-outline-secondary">
          Add Todo
        </button>
      </div>
    );
  }
}
