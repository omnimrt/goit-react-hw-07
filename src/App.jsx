import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";
function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.phonebook.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().includes((filter || "").toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(contacts));
  }, [contacts]);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(finalUser));
  };

  const onUserDelete = (userId) => {
    dispatch(deleteContact(userId));
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
