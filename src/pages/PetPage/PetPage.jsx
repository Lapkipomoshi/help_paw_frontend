import React from 'react';
import { useParams } from 'react-router-dom';
import './PetPage.css';

const PetPage = () => {
  const { id } = useParams(); // id питомца, получаемый из url-адреса текущей страницы
  const [pet, setPet] = React.useState({}); // информация о питемоце

  return (
    <main className='main pet'>
    </main>
  );
};

export default PetPage;
