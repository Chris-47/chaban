import React, { Component } from 'react';
import Search from './Search.js';
import { Row, Col, Button, Icon } from 'react-materialize';

class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      from: null,
      to: null
    }
  }

  handleChange = (e) =>{
    switch (e.target.name) {
      case 'from':
        this.setState({from: e.target.value});
        break;
      case 'to':
        this.setState({to: e.target.value});
        break;
    }
  }

  frenchDate(date){
    var year = date.substring(0,4);
    var month = date.substring(5,7);
    var day = date.substring(8,10);
    return day+'/'+month+'/'+year;
  }

  click = () =>{
    const from = this.state.from ? "?from="+this.frenchDate(this.state.from) : '';
    const to = this.state.to ? "?to="+this.frenchDate(this.state.to) : '';
    console.log(from, to);

    fetch('http://localhost:1337/'+from+to)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <Row>
          <Col s={6}>
            From
              <input
                onChange={this.handleChange}
                placeholder="From"
                type='date'
                name="from"
                >
            </input>
          </Col>
          <Col s={6}>
              To
              <input
                onChange={this.handleChange}
                placeholder="To"
                type='date'
                name="to"
                >
              </input>
          </Col>
          <div className="center">
            <Button
              onClick={this.click}
              waves='light'>Search
              <Icon left>search</Icon>
            </Button>
          </div>
      </Row>
    );
  }
}

export default SearchBox;
