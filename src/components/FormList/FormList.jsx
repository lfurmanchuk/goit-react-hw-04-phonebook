import PropTypes from 'prop-types';
import { List, Item, DeleteBtn, Tel } from './FormList.styled';

// Приймає всі наявні контакти, складає в єдиний ul і підключає метод для можливості видалення контакту
export default function ContactList({ contacts, handleDelete }) {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <span>{contact.name}: </span>
          <Tel href={`tel:${contact.number}`}>{contact.number}</Tel>
          <DeleteBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func,
};
