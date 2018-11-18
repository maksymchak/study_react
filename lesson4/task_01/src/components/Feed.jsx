import React from 'react';

import FES from '../list/FES.json';

import Users from './People.jsx';


import './Feed.css';

const Feed = React.createClass({

  getInitialState() {
    return {
        displayedContacts: FES
    };
  },

  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = FES.filter(function(el) {
        var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
        displayedContacts: displayedContacts
    });

  },

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
});

export default Feed;