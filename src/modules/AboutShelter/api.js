import { baseUrl, apiHeaders } from '../../utils/constants';


// eslint-disable-next-line
export const setPayment = async (id, amount) => {
  try {
    if (localStorage.getItem('access')) {
      const token = localStorage.getItem('access');
      apiHeaders.authorization = `Bearer ${token}`;
    }
    const response = await fetch(`${baseUrl}/v1/payments/get-partner-link/`, {
      method: 'GET',
      headers: apiHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      delete apiHeaders.authorization;
      return data.partner_link;
    }
    throw new Error('Ошибка при отправке запроса');
  } catch (error) {
    throw new Error('Ошибка:', error);
  }
};
