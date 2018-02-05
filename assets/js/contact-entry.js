import React from 'react';

const ContactEntry = props => (
  <a className="panel-block" onClick={props.onClick} href='#'>
    {props.message}
  </a>
);

export default ContactEntry;
