import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const removeContact = createAction('contacts/delete');
export const filterAct = createAction('contacts/filter');

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactsRequest'
);
export const deleteContactsSeccess = createAction(
  'contacts/deleteContactsSeccess'
);
export const deleteContactsError = createAction('contacts/deleteContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');
