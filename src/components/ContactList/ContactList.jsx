import Contact from 'components/Contact/Contact';
import { ListStyled } from './ContactList.styled';
import {  useDispatch, useSelector } from 'react-redux'
import {removeContact} from 'redux/contacts/contacts-operation'
import toast from 'react-hot-toast';

export default function ContactList() {
  const {contacts, filter} = useSelector(state=>state.contacts)
  const dispatch = useDispatch();
  
  const deleteContact =(id)=>{
    dispatch(removeContact(id))
    toast.success('delete is complete');
  }
  return (
    <>
      <section>
        <ListStyled>
          {contacts.length>0 && contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, phone }) => (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  phone={phone}
                  deleteContact={deleteContact}
                />
              </li>
            ))}
        </ListStyled>
      </section>
    </>
  );
}
