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

import { contactsReducer } from "./contactsSlice.";
import { filterReducer } from "./filtersSlice";

const contactsConfig = {
  key: "contactsKey",
  storage,
  //   whitelist: ["users"], // blacklist: ["showProfilesList"]
};

export const store = configureStore({
    reducer: {
        contactsData: persistReducer(contactsConfig, contactsReducer),
        filtersData: filterReducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);