import React, {Component} from 'react';
import ContactSearch from './contact-search';
import ContactEntry from './contact-entry';

class ContactList extends Component {
  _renderContacts(contacts) {
    return contacts.map((contact, i) => (
      <ContactEntry key={i} contact={contact} />
    ));
  }

  render() {
    return (
      <nav class='panel'>
        <p class='panel-heading'>
          Contacts
        </p>
        <ContactSearch />
        <div>
          {this._renderContacts(this.props.contacts)}
        </div>
      </nav>
    );
  }
}

ContactList.defaultProps = {
  contacts: [{name: 'chris sd asd'}, {name: "sad asd asd"}]
};

export default ContactList;
