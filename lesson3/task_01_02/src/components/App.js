import React, { Component } from 'react';

import './App.css';

export default class App extends Component {

 
  render() {

    return(
      <div
        className="circle"
        style={{width: size, height: size}}
        onClick={this.handleClick}>
      </div>
    );
  };
}