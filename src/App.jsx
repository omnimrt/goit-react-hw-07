import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { setFilter } from "./redux/filtersSlice";
import { fetchContacts, addContact, deleteContact } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.phonebook.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().includes((filter || "").toLowerCase())
  );

  const onAddUser = (formData) => {
    dispatch(addContact(formData));
  };

  const onUserDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onChangeFilter={onChangeFilter} value={filter} />
      <ContactList users={filteredContacts} onUserDelete={onUserDelete} />
    </>
  );
}

export default App;
