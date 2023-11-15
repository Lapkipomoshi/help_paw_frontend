import { baseUrl } from '../../../../utils/constants';

export const defaultFormValues = { position: '', salary: null, is_ndfl: '', schedule: [], education: '', description: '' };

export const fetchDataFromBackend = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getShiftOptions = async () => {
  const url = `${baseUrl}/v1/schedules/`;
  return fetchDataFromBackend(url);
};

export const getEducationOptions = async () => {
  const url = `${baseUrl}/v1/educations/`;
  return fetchDataFromBackend(url);
};

export const getSalaryOptions = () => {
  const salaryOptions = [
    { name: 'с НДФЛ', slug: 'ndfl' },
    { name: 'На руки', slug: 'no_ndfl' },
  ];

  return salaryOptions;
};

export const deleteVacancy = async (id) => {
  try {
    const token = localStorage.getItem('access');
    const response = await fetch(`http://194.58.109.129/api/v1/my-shelter/vacancies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при удалении вакансии');
    }

    return true; // Успешное удаление
  } catch (error) {
    throw new Error('Ошибка при удалении вакансии');
  }
};