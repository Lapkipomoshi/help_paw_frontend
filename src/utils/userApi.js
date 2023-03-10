import { baseUrl } from './constants';

const checkServerResponse = (res) => {
  return res.ok
    ? res.json()
    // eslint-disable-next-line prefer-promise-reject-errors
    : Promise.reject(`Ошибка: ${res.status}`);
};

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (token) => {
  return fetch(`${baseUrl}/auth/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkServerResponse);
};
