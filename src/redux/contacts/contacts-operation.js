import * as contactsAction from './contacts-actions';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  const contacts = await contactsAPI.fetchContacts();
  try {
    dispatch(contactsAction.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error));
  }
};
