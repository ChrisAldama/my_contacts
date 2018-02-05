import React from 'react';
import ReactDom from 'react-dom';
import ContactList from './contact-list';

const contactListElement = document.getElementById('contact-list-container');

ReactDom.render(<ContactList />, contactListElement);
