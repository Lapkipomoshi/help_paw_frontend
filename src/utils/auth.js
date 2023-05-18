import { baseUrl } from './constants';

const checkServerResponse = (res) => {
  if (res.status === 204) {
    return Promise.resolve({});
  }
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

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

// eslint-disable-next-line camelcase
export const resetPasswordConfirm = ({ uid, token, new_password }) => {
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
