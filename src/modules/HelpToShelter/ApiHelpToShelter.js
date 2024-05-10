import { baseUrl, apiHeaders } from '../../utils/constants';

// eslint-disable-next-line
export const donateToShelter = async (id, amount) => {
  try {
    if (localStorage.getItem('access')) {
      const token = localStorage.getItem('access');
      apiHeaders.authorization = `Bearer ${token}`;
    }
    const response = await fetch(`${baseUrl}/v1/payments/shelters/${id}/donate/`, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify({
        amount
      })
    });

    if (response.ok) {
      const data = await response.json();
      delete apiHeaders.authorization;
      return data.payment_confirm_url;
    }
    throw new Error('Ошибка при отправке запроса');
  } catch (error) {
    throw new Error('Ошибка:', error);
  }
};
