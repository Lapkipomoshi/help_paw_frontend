import { baseUrl } from '../../../../../utils/constants';

const getToken = (email, password) => {
  return fetch(`${baseUrl}/auth/jwt/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      console.log('Токен успешно получен: ', data);
      return data.access;
    })
    .catch((error) => {
      console.error('Ошибка при получении токена: ', error);
    });
};

export default getToken;
