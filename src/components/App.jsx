import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout } from './Layout.js';
import { Form } from 'components/Form/Form.jsx';
import initialContacts from '../contacts.json';

const id = nanoid();

export class App extends Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };
  addContact = ({name, number}) => {
    const newContact = {
      name,
      number,
    };
    console.log(newContact)
    this.setState(({contacts}) => ({
      contacts: [newContact, ...contacts],
    }));
  }

  formSubmitHandler = data => {
    console.log(data);
  }
  
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            required
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </label>
        <ul key={id}>
          <li>{ }</li>
        </ul>
      </Layout>
    );
  }
}
