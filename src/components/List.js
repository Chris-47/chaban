import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.js';

class List extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((item) => {
          return <ListItem
            key={item.id}
            item={item}
          />
        })}
      </div>
    );
  }
}

export default List;
