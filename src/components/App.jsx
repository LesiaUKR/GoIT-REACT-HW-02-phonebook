import React, { Component } from 'react';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout, Header, MainHeader } from './Layout.js';
import { ContactsForm } from 'components/ContactsForm/ContactsForm.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import initialContacts from '../contacts.json';

export class App extends Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };

  addContact = newContact => {
    this.state.contacts.filter(contact => contact.name === newContact.name)
      .length
      ? alert(`${newContact.name}: is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <MainHeader>Phonebook</MainHeader>
        <ContactsForm onSubmit={this.addContact} />
        <Header>Contacts</Header>
        <Filter onChange={this.changeFilter} value={this.state.filter}></Filter>
        <ContactList
          contacts={this.getFilterContacts()}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Layout>
    );
  }
}
