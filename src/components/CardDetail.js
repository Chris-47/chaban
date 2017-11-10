import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import bridge from './bridge.jpg';
import './../styles/App.css';

class CardDetail extends Component {
  render() {
    return (
      <Card header={<CardTitle image={bridge}>Bride will be closed on {this.props.title}</CardTitle>}
            actions={[<a key href={this.props.link}>Link</a>]}>
      	From : {this.props.start} to : {this.props.end} <br/>
        Because of : <strong>{this.props.reason}</strong>
      </Card>
    );
  }
}

export default CardDetail;
