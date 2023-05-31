import { useState } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { showNotifyReport } from 'js/notifyFunc';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleChangeFilter = ({ target: { value } }) => setFilter(value);
     
  const handleSubmit = contactFormStates => {
    const { name, number } = contactFormStates;
    const newContact = { id: nanoid(), name, number };

    contacts.some(({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase())
      ? showNotifyReport(`${name} is already in contact`, 'reportWarning')
      : setContacts(contacts => [...contacts, newContact]);
  };

  const handleDeleteContact = contactId => setContacts(contacts => contacts.filter(({ id }) => contactId !== id));

  return (
    <div className={css.app}>
      <h1 className={css.appTitle}>Phonebook</h1>

      <ContactForm handleSubmit={handleSubmit} />

      <h2 className={css.title}>Contacts:</h2>

      <Filter handleChangeFilter={handleChangeFilter} filter={filter} />

      {!contacts.length ? (
        <p className={css.listEmpty}>The contact list is empty!</p>
      ) : (
        <ContactList
          contacts={contacts}
          filter={filter}
          handleDeleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};

export { App };
