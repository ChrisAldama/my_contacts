export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const APPEND_CONTACTS = 'APPEND_CONTACTS';
export const DETAIL = 'DETAIL';

export const search_contact = searchBy => ({
  type: SEARCH_CONTACT,
  payload: searchBy
});

export const append_contacts = contacts => ({
  type: APPEND_CONTACTS,
  payload: contacts
});

export const detail = contact => ({
  type: DETAIL,
  payload: contact
});
