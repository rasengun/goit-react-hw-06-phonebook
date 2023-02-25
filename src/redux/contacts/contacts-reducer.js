import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContact]: (store, action) => [...store, action.payload],
  [deleteContact]: (store, action) =>
    store.filter(item => item.id !== action.payload),
});

export default contactsReducer;
