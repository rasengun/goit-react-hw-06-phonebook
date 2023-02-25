import { ADD_CONTACT, DELETE_CONTACT } from './contacts-type';

const initialStore = [];

const contactsReducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...store, action.payload];
    case DELETE_CONTACT:
      return store.filter(item => item.id !== action.payload);
    default:
      return store;
  }
};

export default contactsReducer;
