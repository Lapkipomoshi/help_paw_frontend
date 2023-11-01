import { baseUrl } from '../../../../../utils/constants';

// Функция для отправки данных на бекенд с использованием токена
const sendDataWithToken = async (token, formData) => {
  try {
    const response = await fetch(`${baseUrl}/v1/my-shelter/vacancies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Предполагается, что токен передается в заголовке Authorization
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Ошибка при отправке данных на бекенд');
  }
};

export default sendDataWithToken;