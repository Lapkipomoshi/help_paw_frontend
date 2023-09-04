import { apiHeaders, baseUrl } from '../../utils/constants';

const getPet = async (shelterId, petId) => {
  const response = await fetch(`${baseUrl}/v1/shelters/${shelterId}/pets/${petId}`, {
    method: 'GET',
    headers: apiHeaders,
  }); // Этот запрос сделан в качестве проверки

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();

  return data; // Нет данных о животных на беке. Приходит пустой массив.
};

export default getPet;
