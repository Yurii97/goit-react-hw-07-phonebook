import {
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit';
import * as contactsAction from './contacts-actions';

const localContacts = localStorage.getItem('contacts');
const parseContacts = JSON.parse(localContacts);
const refLocalStorage = arr =>
  localStorage.setItem('contacts', JSON.stringify(arr));

// const contacts = createReducer(parseContacts ?? [], {
//   [contactsAction.addContact]: (state, { payload }) => {
//     const refContacts = [payload, ...state];
//     refLocalStorage(refContacts);
//     return refContacts;
//   },
//   [contactsAction.removeContact]: (state, { payload }) => {
//     const refContacts = state.filter(
//       ({ id }) => id !== payload
//     );
//     refLocalStorage(refContacts);
//     return refContacts;
//   },
// });

const contacts = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (_, { payload }) =>
    payload,
});

const filter = createReducer('', {
  [contactsAction.filterAct]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsAction.fetchContactsRequest]: () => true,
  [contactsAction.fetchContactsSuccess]: () => true,
  [contactsAction.fetchContactsError]: () => true,
});

const error = createReducer(null, {
  [contactsAction.fetchContactsError]: (_, { payload }) =>
    payload,
  [contactsAction.fetchContactsRequest]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
