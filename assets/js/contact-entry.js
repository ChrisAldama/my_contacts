import React from 'react';

const ContactEntry = props => (
  <a className="panel-block" onClick={props.onClick} href='#'>
    {props.contact.name}
  </a>
);

export default ContactEntry;
