import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
  };

  nameInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
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
            onChange={this.handleChange}
            id={this.nameInputId}
            value={this.state.name}
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
