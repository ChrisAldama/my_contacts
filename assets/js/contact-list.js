import React, {Component} from 'react';
import ContactSearch from './contact-search';
import ContactEntry from './contact-entry';
import {connect} from 'react-redux';
import {detail} from './actions';

class ContactList extends Component {
  _renderContacts(contacts) {
    return contacts.map(contact => (
      <ContactEntry key={contact.id} 
                    contact={contact} 
                    onClick={() => this.props.detail(contact)}/>
    ));
  }

  render() {
    const hide = this.props.contact_detail? 'is-hidden-mobile': '';
    return (
      <nav className={`panel ${hide}`}>
        <p className='panel-heading'>
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
  contacts: []
};

const mapStateToProps = state => ({
  contacts: state.all_contacts,
  contact_detail: state.detail
});

export default connect(mapStateToProps, {detail})(ContactList);
