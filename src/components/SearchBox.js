import React, { Component } from 'react';
import Search from './Search.js';
import { Row, Col, Button, Icon } from 'react-materialize';

class SearchBox extends Component {
  render() {
    return (
      <Row>
        <Col s={6}>
          From
            <Search placeholder="From" />
        </Col>
        <Col s={6}>
            To
            <Search placeholder="To" />
        </Col>
        <div className="center">
          <Button waves='light'>Search<Icon left>search</Icon></Button>
        </div>
      </Row>
    );
  }
}

export default SearchBox;
