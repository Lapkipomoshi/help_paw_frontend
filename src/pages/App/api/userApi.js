import { baseUrl } from '../../../utils/constants';

const checkServerResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(res));
};

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/auth/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkServerResponse);
};

export default getUserInfo;
