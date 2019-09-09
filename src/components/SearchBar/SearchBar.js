import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onSearch = event => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearch(term);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.onSearch}
          value={this.state.term}
          className="form-control search-input"
          placeholder="search"
        />
      </form>
    );
  }
}
