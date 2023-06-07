import React, { Component } from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchFilter from './SearchFilter/SearchFilter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <SearchFilter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
