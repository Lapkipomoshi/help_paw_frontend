import { baseUrl } from '../../utils/constants';

const donateHeaders = new Headers();
donateHeaders.append('Content-Type', 'application/json');

// eslint-disable-next-line
export const donateToShelter = async (id, amount) => {
  try {
    if (localStorage.getItem('access')) {
      const token = localStorage.getItem('access');
      donateHeaders.append('authorization', `Bearer ${token}`);
    }
    const response = await fetch(`${baseUrl}/v1/payments/shelters/${id}/donate/`, {
      method: 'POST',
      headers: donateHeaders,
      body: JSON.stringify({
        amount
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data.payment_confirm_url;
    }
    throw new Error('Ошибка при отправке запроса');
  } catch (error) {
    throw new Error('Ошибка:', error);
  }
};
