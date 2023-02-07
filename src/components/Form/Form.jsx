import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });

    // const targetInput = e.currentTarget;
    // this.setState({ [targetInput.name]: targetInput.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    // Зовнішній метод в пропсах класа
    this.props.onFormSubmit(contact);

    this.reset();
  };

  // Очищення полів форми після відправки
  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name" id={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // Спостерігаючий метод
            onChange={this.handleChange}
            id={this.nameInputId}
            // Пишемо значення до state
            value={this.state.name}
          />
        </label>
        <label htmlFor="tel" id={this.telInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.telInputId}
            // Пишемо значення до stat
            value={this.state.number}
            // Спостерігаючий метод
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
