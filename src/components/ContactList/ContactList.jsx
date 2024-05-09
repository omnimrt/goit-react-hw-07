import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ users, onUserDelete }) => {
  console.log("Users in ContactList:", users);
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(users) &&
          users.map((user) => {
            return (
              <Contact key={user.id} user={user} onUserDelete={onUserDelete} />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
