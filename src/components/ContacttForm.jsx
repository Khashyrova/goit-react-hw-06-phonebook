import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/contacts';
import { nanoid } from 'nanoid';
import {
  Phonebook,
  PhonebookTitle,
  PhonebookForm,
  PhonebookFormLabel,
  PhonebookFormInput,
  PhonebookFormButton,
} from './Styles.module.jsx';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const getContacts = state => state.contacts;
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts({ id: nanoid(), name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Phonebook>
      <PhonebookTitle>☎️ Phonebook</PhonebookTitle>
      <PhonebookForm onSubmit={handleSubmit}>
        <PhonebookFormLabel htmlFor="name">Name</PhonebookFormLabel>
        <PhonebookFormInput
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <PhonebookFormLabel htmlFor="number">Number</PhonebookFormLabel>
        <PhonebookFormInput
          type="tel"
          id="number"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhonebookFormButton type="submit" onClick={() => {}}>
          Add contact
        </PhonebookFormButton>
        <br />
      </PhonebookForm>
    </Phonebook>
  );
};

export default ContactForm;
