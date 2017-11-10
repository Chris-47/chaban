import React, { Component } from 'react';
import List from '../components/List.js';
import SearchBox from '../components/SearchBox.js';
import { Preloader } from 'react-materialize';
import { Link} from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:1337')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  handleSearch = (searchResult) => {
  this.setState({data: searchResult});
  }

  render() {

    const { data } = this.state;

    return (
      <div className="app">
        <h2> Fermetures du pont Chaban-Delmas </h2>
        {!data ? (
          <div className="center">
            <Preloader flashing/>
          </div>
        ) : (
          <div>
            <SearchBox />
            <List data={data} />
          </div>
        )}
      </div>
    );
  }

}

export default Home;
