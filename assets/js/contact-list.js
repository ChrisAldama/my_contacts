import React, {Component} from 'react';
import ContactSearch from './contact-search';
import ContactEntry from './contact-entry';
import {connect} from 'react-redux';
import {detail} from './actions';

class ContactList extends Component {
  _renderContacts(contacts, field) {
    return contacts.map(contact => (
      <ContactEntry key={contact.id} 
                    message={getMessage(contact, field)} 
                    onClick={() => this.props.detail(contact)}/>
    ));
  }

  render() {
    const hide = this.props.contact_detail? 'is-hidden-mobile': '';
    const field = this.props.field.toLowerCase();
    return (
      <nav className={`panel ${hide}`}>
        <p className='panel-heading'>
          Contacts
        </p>
        <ContactSearch />
        <div>
          {this._renderContacts(this.props.contacts, field)}
        </div>
      </nav>
    );
  }
}

ContactList.defaultProps = {
  contacts: [],
  field: 'name'
};

const getMessage = (contact, field) => {
  if(field === 'address') {
    return `${contact.line1}, ${contact.line2} ${contact.zip}. ${contact.city}, ${contact.state}`;
  } else {
    return contact[field];
  }
};

const mapStateToProps = state => ({
  contacts: state.all_contacts,
  contact_detail: state.detail,
  ...state.searchBy
});

export default connect(mapStateToProps, {detail})(ContactList);
