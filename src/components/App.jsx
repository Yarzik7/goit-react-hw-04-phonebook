import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterInputId = nanoid();

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = contactFormStates => {
    const { name, number } = contactFormStates;
    const newContact = { id: nanoid(), name, number };

    this.state.contacts.some(({ name: contactName }) => contactName === name)
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  handleDeleteContact = ({
    target: {
      dataset: { name },
    },
  }) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ name: contactName }) => contactName !== name),
    }));

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.app}>
        <h1 className={css.appTitle}>Phonebook</h1>

        <ContactForm
          handleSubmit={this.handleSubmit}
          nameInputId={this.nameInputId}
          numberInputId={this.numberInputId}
        />

        <h2 className={css.title}>Contacts:</h2>

        <Filter
          filterInputId={this.filterInputId}
          handleChange={this.handleChange}
          filter={filter}
        />

        {!contacts.length ? (
          <p className={css.listEmpty}>The contact list is empty!</p>
        ) : (
          <ContactList
            contacts={contacts}
            filter={filter}
            handleDeleteContact={this.handleDeleteContact}
          />
        )}
      </div>
    );
  }
}

export { App };
