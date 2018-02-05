import React             from 'react';
import ReactDom          from 'react-dom';
import ContactList       from './contact-list';
import ContactDetail     from './contact-detail';
import {createStore}     from 'redux';
import {Provider}        from 'react-redux';
import {ApolloProvider}  from 'react-apollo';
import reducer           from './reducers';
import { ApolloClient }  from 'apollo-client';
import { HttpLink }      from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/v1/graphiql' }),
  cache: new InMemoryCache()
});
const store = createStore(reducer);
const contactListElement = document.getElementById('contact-list-container');
const contactDetailElement = document.getElementById('contact-detail-container');

ReactDom.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ContactList />
    </Provider>
  </ApolloProvider>), contactListElement);

ReactDom.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ContactDetail />
    </Provider>
  </ApolloProvider>), contactDetailElement);
