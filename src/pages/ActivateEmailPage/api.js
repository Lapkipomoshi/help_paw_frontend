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

const resetEmailConfirm = ({ uid, token, new_email }) => {
  return fetch(`${baseUrl}/auth/users/reset_email_confirm/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uid, token, new_email }),
  })
    .then(checkServerResponse);
};

export default resetEmailConfirm;