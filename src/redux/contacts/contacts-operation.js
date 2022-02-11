import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const contacts = await contactsAPI.fetchContacts();
  return contacts
})

export const addContact = createAsyncThunk('contacts/addContacts', async (contact) => {
  const contacts = await contactsAPI.addContacts(contact);
  return contacts
})

export const removeContact = createAsyncThunk('contacts/deleteContacts', async (id) => {
  const contacts = await contactsAPI.deleteContacts(id);
  return contacts
})