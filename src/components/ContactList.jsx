import {
  Contacts,
  ContactsTittle,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsSpan,
  ContactsButton,
} from './Styles.module';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../redux/contacts';

const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };
  return (
    <Contacts>
      <ContactsTittle>Contacts</ContactsTittle>
      {children}
      <ContactsList>
        {contactsList.length === 0 ? null : (
          <>
            {contactsList.map(({ name, number, id }) => {
              return (
                <ContactsItem key={id}>
                  <ContactsText>
                    <ContactsSpan>{name} : </ContactsSpan>
                    {number}
                  </ContactsText>
                  <ContactsButton
                    onClick={() => {
                      deleteItem(id);
                    }}
                  >
                    ⛌
                  </ContactsButton>
                </ContactsItem>
              );
            })}
          </>
        )}
      </ContactsList>
    </Contacts>
  );
};

export default ContactList;
