import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { phonebookReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const phonebookPeristConfig = {
  key: "phonebook",
  storage,
  whitelist: ["contacts"],
};

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPeristConfig, phonebookReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
