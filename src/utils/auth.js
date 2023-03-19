import { baseUrl } from './constants';

const checkServerResponse = (res) => {
  if (res.status === 204) {
    return Promise.resolve({});
  }
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
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

export const activateUser = ({ uid, token }) => {
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

export const resetPassword = ({ email }) => {
  return fetch(`${baseUrl}/auth/users/reset_password/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(checkServerResponse);
};
