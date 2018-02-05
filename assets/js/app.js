import React from 'react';
import ReactDom from 'react-dom';
import ContactList from './contact-list';
import ContactDetail from './contact-detail';

const contactListElement = document.getElementById('contact-list-container');

const contactDetailElement = document.getElementById('contact-detail-container');

ReactDom.render(<ContactList />, contactListElement);
ReactDom.render(<ContactDetail />, contactDetailElement);
