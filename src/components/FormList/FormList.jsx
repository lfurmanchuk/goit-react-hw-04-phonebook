// Приймає всі наявні контакти, складає в єдиний ul і підключає метод для можливості видалення контакту
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}: </span>
          <a href={`tel:${contact.number}`}>{contact.number}</a>
          <button
            type="button"
            // Метод на кліку, приймає ID контакта
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
        // <li
        //   contact={contact}
        //   onDeleteContact={onDeleteContact}
        //   key={contact.id}
        // />
      ))}
    </ul>
  );
};
