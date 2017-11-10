import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Preloader } from 'react-materialize';
import './../styles/App.css';
import CardDetail from './../components/CardDetail.js'
import NavBar from './../components/NavBar.js'

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    const url = 'http://localhost:1337/'+this.props.match.params.id
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <NavBar />
        <Row>
          <Col s={3}></Col>
          <Col s={6}>
            {!data ? (
              <div className="center">
                <Preloader flashing/>
              </div>
            ) : (
              <div>
                <CardDetail
                  title={data.date}
                  start={data.start}
                  end={data.end}
                  link={data.link}
                  reason={data.reason}/>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
