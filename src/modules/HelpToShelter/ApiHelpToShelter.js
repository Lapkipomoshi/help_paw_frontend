import { baseUrl } from '../../utils/constants';

// eslint-disable-next-line
export const donateToShelter = async (id, amount) => {
  try {
    const response = await fetch(`${baseUrl}/v1/payments/shelters/${id}/donate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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
