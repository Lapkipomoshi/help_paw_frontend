import { baseUrl } from '../../utils/constants';

const setPayment = async (token) => {
  // Перенаправить на страницу OAuth-сервера ЮKassa
  const response = await fetch(`${baseUrl}/v1/payments/get-partner-link/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    redirect: 'follow'
  }).then(
    console.log('OK')
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

};
export default setPayment;
