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

const activateUser = ({ uid, token }) => {
  return fetch(`${baseUrl}/auth/users/activation/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uid, token }),
  })
    .then(checkServerResponse);
};

export default activateUser;