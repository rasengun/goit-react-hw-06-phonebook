import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const ContactList = ({ removeContact }) => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsList = filterContacts();

  return (
    <ul>
      {contactsList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>Name: {name}</span>
            <span>Phone: {number}</span>
            <button onClick={() => removeContact(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
};
