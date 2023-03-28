// import React, { Component } from 'react';

import { useState, useEffect } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactList } from './FormList/FormList';
import { SectionTitle } from './Section/Section.styled';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setСontacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setСontacts([
          ...contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ]);
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const handleDelete = id => {
    setСontacts(contacts.filter(contact => contact.id !== id));
  };

  const contactsFiltered = [];
  contacts.forEach(contact => {
    contact.name.toLowerCase().includes(filter.toLowerCase()) &&
      contactsFiltered.push(contact);
  });

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <Section title="Phonebook">
        <Form onFormSubmit={formSubmitHandler}></Form>
        <SectionTitle>Contacts</SectionTitle>
        <Filter value={filter} onChange={handleChange} />
        <ContactList
          contacts={contactsFiltered}
          onDeleteContact={handleDelete}
        />
      </Section>
    </div>
  );
}
