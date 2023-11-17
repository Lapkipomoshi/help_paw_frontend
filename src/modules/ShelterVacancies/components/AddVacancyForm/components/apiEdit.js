import { baseUrl } from '../../../../../utils/constants';

const updateDataWithToken = async (token, formData, id) => {
  try {
    const response = await fetch(`${baseUrl}/v1/my-shelter/vacancies/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Ошибка при отправке данных на бекенд');
  }
};

export default updateDataWithToken;