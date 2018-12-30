import React, {Component} from 'react';

import './App.css';

export default class App extends Component {
  state = {
    imageSide: false
  };

  handleChange = () => {
    this.setState({
      imageSide: !this.state.imageSide
    });
  };

  render() {
    return (
      <div
        className={this.state.imageSide ? 'frontSide' : 'backSide'}
        onClick={this.handleChange}>
      </div>
    );
  };
}