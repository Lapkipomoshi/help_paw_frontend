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