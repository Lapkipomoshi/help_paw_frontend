import React from 'react';
import { useParams } from 'react-router-dom';
import './PetPage.css';

const PetPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams(); // id питомца, получаемый из url-адреса текущей страницы
  // eslint-disable-next-line no-unused-vars
  const [pet, setPet] = React.useState({}); // информация о питемоце

  return (
    <main className='main pet'>
      Страница питомца
    </main>
  );
};

export default PetPage;
