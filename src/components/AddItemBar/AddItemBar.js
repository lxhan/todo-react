import React from 'react';
import './AddItemBar.css';

export default class AddItemBar extends React.Component {
  state = {
    label: '',
  };

  onInput = event => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.label) {
      this.props.onItemAdd(this.state.label);
      this.setState({ label: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="item-add-form d-flex">
        <input
          type="text"
          className="form-control"
          onChange={this.onInput}
          value={this.state.label}
          placeholder="Todo"
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
