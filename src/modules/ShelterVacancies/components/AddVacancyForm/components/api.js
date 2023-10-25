import { baseUrl } from '../../../../../utils/constants';

// Функция для получения токена
export const getToken = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}/auth/jwt/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data.access; // Предполагается, что сервер возвращает токен в поле 'token'
  } catch (error) {
    console.error('Ошибка при получении токена', error);
    throw new Error('Ошибка при получении токена');
  }
};

// Функция для отправки данных на бекенд с использованием токена
export const sendDataWithToken = async (access, formData) => {
  try {
    const response = await fetch(`${baseUrl}/v1/my-shelter/vacancies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`, // Предполагается, что токен передается в заголовке Authorization
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data; // Возвращаемые данные с сервера
  } catch (error) {
    console.error('Ошибка при отправке данных на бекенд', error);
    throw new Error('Ошибка при отправке данных на бекенд');
  }
};

// Пример использования функций
// const email = 'example@example.com';
// const password = 'examplePassword';

// getToken(email, password)
//   .then((token) => {
//     const formData = { /* Ваши данные для отправки на бекенд */ };
//     return sendDataWithToken(token, formData);
//   })
//   .then((data) => {
//     console.log('Данные успешно отправлены на бекенд', data);
//   })
//   .catch((error) => {
//     console.error('Произошла ошибка:', error);
//   });
