import { baseUrl } from './constants';

const checkServerResponse = (res) => {
  return res.ok
    ? res.json()
    // eslint-disable-next-line prefer-promise-reject-errors
    : Promise.reject(`Ошибка: ${res.status}`);
};

// eslint-disable-next-line import/prefer-default-export
export const register = (username, password, email) => {
  return fetch(`${baseUrl}/auth/users/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, email }),
  })
    .then(checkServerResponse);
};

// eslint-disable-next-line import/prefer-default-export
export const login = ({ password, email }) => {
  return fetch(`${baseUrl}/auth/jwt/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkServerResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkServerResponse);
};
