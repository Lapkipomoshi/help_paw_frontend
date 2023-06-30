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

const resetPasswordConfirm = ({ uid, token, new_password }) => {
  return fetch(`${baseUrl}/auth/users/reset_password_confirm/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // eslint-disable-next-line camelcase
    body: JSON.stringify({ uid, token, new_password }),
  })
    .then(checkServerResponse);
};

export default resetPasswordConfirm;