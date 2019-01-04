import React, { Component } from 'react';

import './App.css';

export default class App extends Component {

  state = {
    size: 50
  };

  handleClick = () => {
    if (this.state.size < 200) {
      this.setState({ size: this.state.size + 20 });    
    } else {
      this.setState({ size: this.state.size = 50 });
    }
  };
 
  render() {
    const { size } = this.state;

    return(
      <div
        className="circle"
        style={{width: size, height: size}}
        onClick={this.handleClick}>
      </div>
    );
  };
}