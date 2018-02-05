import React, {Component} from 'react';

const SearchSelect = props => (
  <span class='select is-left is-small'>
    <select class="">
      <option valuealue='Name'>Name</option>
      <option value='PHONE'>Phone</option>
      <option value='ADDRESS'>Address</option>
    </select>
  </span>
);

const SearchIcon = props => (
 <span class="icon is-left is-small">
    <i class="fas fa-search"></i>
  </span>
);

class ContactSearch extends Component {
  render() {
    return (
      <div class="panel-block">
        <SearchSelect />         
        <p class="control has-icons-left has-icons-right">
          <input class="input is-small" type="text" placeholder="search" />
          <SearchIcon />
        </p>
      </div>
    );
  }
}

export default ContactSearch;
