import React from "react";

import ContactsItem from './ContactsItem.js';


const Contacts = ({ users }) => {

  const elements = users.map((item) => {
    return (
      <ContactsItem 
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
  });

  return (
    <div>
      { elements }
    </div>
  );
};

export default Contacts;