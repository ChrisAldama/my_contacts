import {
  SEARCH_CONTACT,
  APPEND_CONTACTS,
  DETAIL
} from '../actions';

const INITIAL_STATE = {
  pagination: {
    limit: 20,
    offset: 0
  },
  searchBy: {
    field: "NAME",
    value: ""
  },
  all_contacts: [],
  detail: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH_CONTACT:
      return {...state, searchBy: action.payload};
    case APPEND_CONTACTS:
      return {...state, 
              all_contacts: action.payload};
    case DETAIL:
      return {...state, detail: action.payload};
    default:
      return state;
  }
};
