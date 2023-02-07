import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input, AddBtn, FormField } from './Form.styled';

export class Form extends Component {
  // PropTypes як статична властивысть
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Стейт форми з початковим пустим значенням
  state = {
    name: '',
    number: '',
  };

  // змінна ID
  nameInputId = nanoid();
  telInputId = nanoid();

  // Метод, що спостерігає за інпутами і записує в state їх значення
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  // Метод на відправці форми, що формує зі state контакт і передає до зовнішного методу
  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    // Зовнішній метод в пропсах класу
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
        <FormField>
          <Label htmlFor="name" id={this.nameInputId}>
            Name
          </Label>
          <Input
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
        </FormField>
        <FormField>
          <Label htmlFor="tel" id={this.telInputId}>
            Number
          </Label>
          <Input
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
        </FormField>
        <AddBtn type="submit">Add contact</AddBtn>
      </form>
    );
  }
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
