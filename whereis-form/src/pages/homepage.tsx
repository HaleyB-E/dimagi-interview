import React, { Component } from 'react';
import '../App.css';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          Welcome to dimagi whereis!
        </header>
        <a href='./form'>Enter your location</a>
        <br/>
        <a href='./list'>Check your coworkers' location</a>
      </div>
    )
  }
}

export default Homepage;