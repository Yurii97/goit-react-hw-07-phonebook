import {
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit';
import * as contactsAction from './contacts-actions';
import {fetchContacts, addContact, removeContact} from './contacts-operation'

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) =>
    payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [removeContact.fulfilled]:(state, { payload })=>state.filter(({id})=>id!==payload.id)
});

const filter = createReducer('', {
  [contactsAction.filterAct]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]:()=>true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]:()=>true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) =>
    payload,
  [fetchContacts.pending]: () => null,
[addContact.rejected]: (_, { payload }) =>
    payload,
  [addContact.pending]: () => null,
    [removeContact.rejected]: (_, { payload }) =>
    payload,
    [removeContact.pending]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
