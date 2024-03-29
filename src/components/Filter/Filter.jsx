import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';

// Отримання значень з поля фільтр. Приймає значення с поля Find contacts by name і метод, що записує в state
export default function Filter({ value, onChange }) {
  const nameInputId = nanoid();
  return (
    <Label htmlFor={nameInputId}>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameInputId}
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
