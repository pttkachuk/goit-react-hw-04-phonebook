import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import { StyledMainContainer } from './FileContainer/StyledContainer';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = ({ number, name }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts((prevState) => {
      if (prevState.some((i) => i.name === name)) {
        alert(`${name} is already in contacts`);
        return prevState;
      } else {
        return [contact, ...contacts];
      }
    });
  };

  const handleChangeFilterInput = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter(i => i.id !== contactId));
  };

  return (
    <StyledMainContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      <h2>Contacts</h2>
      <SearchBar value={filter} handleChangeFilterInput={handleChangeFilterInput}/>
      <ContactList
        contacts={handleFilterContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </StyledMainContainer> 
  )
}

