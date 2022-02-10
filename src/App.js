import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import * as contactsOperation from './redux/contacts/contacts-operation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, []);

  return (
    <>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
