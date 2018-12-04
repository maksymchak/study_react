import React, { Component } from 'react';

import FES from '../FES.json';

import Users from './People.jsx';

import './Feed.css';


class Feed extends Component {
  state = {
    displayedContacts: FES
  }

  handleSearch = (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = FES.filter(function(el) {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
        displayedContacts: displayedContacts
    });

  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="headLink">Meet React Course Members</h1>
        <input type="text" className="search-field" onChange={this.handleSearch} />
        <div>
          {
            this.state.displayedContacts.map((item) =>
              <Users
                key={item.id}
                id={item.id}
                avatar={item.avatar}
                name={item.name}
                location={item.location}
                geoData={item.geoData}
                facebook={item.facebook}
                github={item.github}
                mail={item.mail}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default Feed;