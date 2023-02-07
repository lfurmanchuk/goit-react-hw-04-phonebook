import PropTypes from 'prop-types';
import { List, Item, DeleteBtn, Tel } from './FormList.styled';

// Приймає всі наявні контакти, складає в єдиний ul і підключає метод для можливості видалення контакту
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <span>{contact.name}: </span>
          <Tel href={`tel:${contact.number}`}>{contact.number}</Tel>
          <DeleteBtn
            type="button"
            // Метод на кліку, приймає ID контакта
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
