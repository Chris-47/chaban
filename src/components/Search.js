import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        type='date'
        >
      </input>
    );
  }
}

export default Search;
