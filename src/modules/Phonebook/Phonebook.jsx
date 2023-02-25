import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';

const Phonebook = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const onAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const onDeletingContact = id => {
    dispatch(deleteContact(id));
  };

  const onFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={onFilter} />
      <ContactList removeContact={onDeletingContact} />
    </>
  );
};

export default Phonebook;
