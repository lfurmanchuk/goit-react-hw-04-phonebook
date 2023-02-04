// import { Phonebook } from './Phonebook/Phonebook';
import React, { Component } from 'react';
import { Form } from './Form/Form';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmiteHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form onFormSubmit={this.formSubmiteHandler}></Form>
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
