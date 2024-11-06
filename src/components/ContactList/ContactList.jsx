import {  useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
// import { selectFilter, selectIsContacts } from '../../redux/selectors';
import { selectFilteredContacts } from '../../redux/contactsSlice.';


const ContactList = () => {
  // const selectContacts = useSelector(selectIsContacts);
  // const selectNameFilter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);
  
  // const visibleContacts = Array.isArray(selectContacts) && selectContacts.filter((contact) => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim()));

  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) && filteredContacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact}
            />
          </li>
        )
        )}
      </ul>
    </div>
  )
};

export default ContactList;
