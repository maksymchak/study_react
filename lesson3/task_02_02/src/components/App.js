import React, { Component } from 'react';

import userData from './users.json';
import AppTitle from './AppTitle.js';
import Contacts from './Contacts.js';

import './App.css';


export default class App extends Component {

  state = {
    displayedContacts: userData,
    term: ''
  };

  search(items, term) {
    if (term.length === 0 ) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  }

  render() {

    const { displayedContacts, term } = this.state;

    const visibleItems = this.search(displayedContacts, term);

    return (
      <div className="wrapper">
        <AppTitle />
        <Contacts users={visibleItems} />
      </div>
    );      
  }
};






