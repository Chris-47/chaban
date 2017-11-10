
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class ListItem extends Component {

  static propTypes = {
    item: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { item } = this.props;

    return (
      <Card title={item.date} >
        <div>Start : {item.start}</div>
        <div>End : {item.end}</div>
        <Link
          to={`/${item.id}`}>
          Voir plus de détails
        </Link>
        {/* <Button floating large className='red' waves='light' icon='add' ></Button> */}
      </Card>
    );
  }

}

export default ListItem;
