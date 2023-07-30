import { baseUrl } from '../../utils/constants';

const checkServerResponse = (res) => {
  if (res.status === 204) {
    return Promise.resolve({});
  }
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const resetEmail = ({ email }) => {
  return fetch(`${baseUrl}/auth/users/reset_email/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access')}`,
    },
    body: JSON.stringify({ email }),
  })
    .then(checkServerResponse);
};

export const updateUserInfo = ({ username }) => {
  return fetch(`${baseUrl}/auth/users/me/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access')}`,
    },
    body: JSON.stringify({ username }),
  })
    .then(checkServerResponse);
};

export default { resetEmail, updateUserInfo };