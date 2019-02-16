import React from "react";

import ContactsItem from './ContactsItem.js';


const Contacts = ({ users }) => {

  const elements = users.map((item) => {

    const {id, ...itemProps} = item;

    return (
      <div key={id}>
        <ContactsItem {...itemProps} />
      </div>
    );
  });

  return (
    <div>
      { elements }
    </div>
  );
};

export default Contacts;