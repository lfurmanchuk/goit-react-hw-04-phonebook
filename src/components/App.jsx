// import { Phonebook } from './Phonebook/Phonebook';
import React, { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactList } from './FormList/FormList';

export class App extends Component {
  // Стейт з базовими даними відповідно до завдання
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // Початкове заповнення поля Find contacts by name
    filter: '',
  };

  addContact = ({ name, number }) => {
    // Перевірка на дублювання
    if (this.checkContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      id: nanoid(),
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // перевірка контакту у списку
  checkContact = checkedNameContact => {
    const res = this.state.contacts.find(
      contact => contact.name === checkedNameContact
    );
    return res;
  };

  // Метод, що спостерігає за полем фільтрації і пише в стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Метод для фільтрування контактів по введеним у полі пошука і повернення результату фільтру
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Метод для видалення контакту
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
        }}
      >
        <Section title="Phonebook">
          <Form onFormSubmit={this.addContact}></Form>
          {/* <h2>Contacts</h2> */}
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredResults}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
