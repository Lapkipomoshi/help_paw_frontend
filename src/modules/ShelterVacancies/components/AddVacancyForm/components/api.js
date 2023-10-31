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
    return data.access;
  } catch (error) {
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
    return data;
  } catch (error) {
    throw new Error('Ошибка при отправке данных на бекенд');
  }
};