import axios from 'axios';

axios.defaults.baseURL =
  'https://62056a28161670001741bb7d.mockapi.io';

export async function fetchContacts() {
  const resp = await axios.get('/contacts');
  return resp.data;
}

export async function addContacts(contact) {
  const resp = await axios.post('/contacts', contact);
  return resp.data;
}

export async function deleteContacts(id) {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp.data;
}
