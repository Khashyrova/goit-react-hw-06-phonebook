import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts';
import filterContacts from './filter';

const rootReducer = {
  contacts,
  filter: filterContacts,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
