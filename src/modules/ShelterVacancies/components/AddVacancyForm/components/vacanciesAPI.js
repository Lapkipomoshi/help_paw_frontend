import { baseUrl } from '../../../../../utils/constants';

export const sendVacancy = async (token, formData) => {
  try {
    const response = await fetch(`${baseUrl}/v1/my-shelter/vacancies/`, {
      method: 'POST',
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

export const updateVacancy = async (token, formData, id) => {
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

export const deleteVacancy = async (id) => {
  try {
    const token = localStorage.getItem('access');
    const response = await fetch(`http://194.58.109.129/api/v1/my-shelter/vacancies/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при удалении вакансии');
    }

    return true;
  } catch (error) {
    throw new Error('Ошибка при удалении вакансии');
  }
};