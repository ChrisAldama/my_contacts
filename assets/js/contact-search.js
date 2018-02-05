import React, {Component} from 'react';
import { graphql, compose} from 'react-apollo';
import {connect} from 'react-redux';
import gql from 'graphql-tag';
import {
  search_contact,
  append_contacts
} from './actions';

const SearchSelect = props => (
  <span className='select is-left is-small'>
    <select onChange={props.onChange}>
      <option value='NAME'>Name</option>
      <option value='PHONE'>Phone</option>
      <option value='ADDRESS'>Address</option>
    </select>
  </span>
);

const SearchIcon = props => (
 <span className="icon is-left is-small">
    <i className="fas fa-search"></i>
  </span>
);

class ContactSearch extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.data.loading && !nextProps.data.loading) {
      this.props.append_contacts(nextProps.data.allContacts);
    }
  }

  _onChange(type, e) {
    let old_search = this.props.searchBy;
    const new_search = {...old_search, [type]: e.target.value};
    this.props.search_contact(new_search);
  }

  render() {
    return (
      <div className="panel-block">
        <SearchSelect onChange={this._onChange.bind(null, 'field')} />         
        <p className="control has-icons-left has-icons-right">
          <input className="input is-small" type="text" placeholder="search" onChange={this._onChange.bind(null, 'value')} />
          <SearchIcon />
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pagination: state.pagination,
  searchBy: state.searchBy
});

const mapDispatchToProps = {
  search_contact,
  append_contacts
};

const query = gql`
 query contacts($pagination: Cursor, $searchBy: SearchBy){
    allContacts(pagination: $pagination, searchBy: $searchBy) {
      name
      id
      line1
      line2
      city
      state
      zip
      phone
    }
  }`;

const query_params = {
  options: ({pagination, searchBy}) => ({
    variables: {pagination, searchBy}
  })
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(query, query_params)
)(ContactSearch);
