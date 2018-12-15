import React, { Component } from 'react';

import CounterList from './CounterList.jsx';
import AddCounter from './AddCounter.jsx';

export default class CounterApp extends Component {
  render() {
    return (
      <div>
        <CounterList/>
        <AddCounter/>
      </div>
    );
  }
}