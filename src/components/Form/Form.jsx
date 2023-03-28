import { useState } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Label, Input, AddBtn, FormField } from './Form.styled';

export default function Form({ formSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // змінна ID
  // nameInputId = nanoid();
  // telInputId = nanoid();

  // Метод, що спостерігає за інпутами і записує в state їх значення
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  // Метод на відправці форми, що формує зі state контакт і передає до зовнішного методу
  const handleSubmit = e => {
    e.preventDefault();

    formSubmitHandler(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // Спостерігаючий метод
          onChange={handleChange}
          // id={nameInputId}
          // Пишемо значення до state
          value={name}
        />
      </FormField>
      <FormField>
        <Label htmlFor="tel">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // id={telInputId}
          // Пишемо значення до stat
          value={number}
          // Спостерігаючий метод
          onChange={handleChange}
        />
      </FormField>
      <AddBtn type="submit">Add contact</AddBtn>
    </form>
  );
}

Form.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
