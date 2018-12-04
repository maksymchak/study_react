import React, { Component } from 'react';

import './People.scss';

class Users extends Component {
  render() {
    const {
      avatar,
      name,
      location,
      geoData,
      facebook,
      github,
      mail
    } = this.props;

    return (
      <div className="container">
        <img
          src={avatar}
          className="avatar"
          width="150"
          height="150"
          alt="Friend"
          />
        <div className="container__info">
          <p className="container__info__name">{name}</p>
          <a className="container__info__location" href={geoData}><i className="fa fa-map-marker" aria-hidden="true"></i> {location}</a>
          <div>
            <a className="container__info__link" href={facebook}>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a className="container__info__link" href={github}>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a className="container__info__link" href={mail}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;