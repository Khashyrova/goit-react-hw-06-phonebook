import { useSelector } from 'react-redux';
import ContactForm from './ContacttForm';
import ContactList from './ContactList';

import Filter from './Filter';

const Phonebook = () => {
  const getContacts = state => state.contacts;
  const contacts = useSelector(getContacts);

  return (
    <>
      <ContactForm />

      {contacts.length > 0 ? (
        <ContactList>
          <Filter />
        </ContactList>
      ) : (
        <h1>No contacts in your phonebook...</h1>
      )}
    </>
  );
};

export default Phonebook;
