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
        // <li
        //   contact={contact}
        //   onDeleteContact={onDeleteContact}
        //   key={contact.id}
        // />
      ))}
    </List>
  );
};
