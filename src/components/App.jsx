// import { Phonebook } from './Phonebook/Phonebook';
import React, { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
  };

  // formSubmiteHandler = data => {
  //   console.log(data);
  // };

  addContact = name => {
    const contact = {
      name,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form onFormSubmit={this.addContact}></Form>
        </Section>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     ></div>
//   );
// };
