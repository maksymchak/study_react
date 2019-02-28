import React, { Component } from 'react';

import userData from './users.json';
import AppTitle from './AppTitle.js';
import SearchPanel from './SearchPanel.js';
import Contacts from './Contacts.js';

import './App.css';

export default class App extends Component {

  state = {
    displayedContacts: userData,
    term: ''
  };

  onSearchChange = (term) => {
    this.setState({term});
  };

  search(items, term) {
    if (term.length === 0 ) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {

    const { displayedContacts, term } = this.state;

    const visibleItems = this.search(displayedContacts, term);

    return (
      <div className="wrapper">
        <AppTitle />
        <SearchPanel 
          onSearchChange={this.onSearchChange} />
        <Contacts 
          users={visibleItems} />
      </div>
    );      
  }
};






