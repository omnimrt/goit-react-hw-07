import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "phonebook", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
      //   const contactIndex = state.contact.findIndex((contact) => contact.id === action.payload);
      //   state.contact.splice(contactIndex, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

// Редюсер слайсу
export const phonebookReducer = contactsSlice.reducer;
