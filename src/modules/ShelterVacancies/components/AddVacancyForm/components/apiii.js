import { baseUrl } from '../../../../../utils/constants';

const postVacancy = (formData, token, onSubmitSuccess) => {
  fetch(`${baseUrl}/v1/my-shelter/vacancies/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      console.log('Успешно отправлено: ', data);
      onSubmitSuccess();
    })
    .catch((error) => {
      console.error('Ошибка при отправке данных: ', error);
    });
};

export default postVacancy;