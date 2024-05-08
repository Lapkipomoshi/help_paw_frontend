import { apiHeaders, baseUrl } from '../../utils/constants';

const setPayment = async () => {
  const response = await fetch(`${baseUrl}/v1/payments/get-partner-link/`, {
    method: 'GET',
    headers: apiHeaders,
    redirect: 'follow'
  }).then(
    console.log('OK')
  );
  // Перенаправить на страницу OAuth-сервера ЮKassa
  // .then((res) => {
  //   console.log(res);
  // });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

};
export default setPayment;
