import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import shelterApi from '../../pages/ShelterPage/api';
import './ShelterSamePets.css';
import PetCard from '../../components/PetCard/PetCard';

const ShelterSamePets = () => {
  const { id, type } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    shelterApi.getPets(id, type, 24, 0)
      .then((res) => { setPets(res); })
      .catch((err) => { throw new Error(err); });
  }, [type]);

  return (
    <section className='shelter-section shelter-same-pets'>
      <Link className='shelter-same-pets__link' to='../pets'>Назад</Link>
      <h2 className='shelter-section__title'>Наши животные</h2>
      <ul className='shelter-same-pets__list'>
        {pets.map((card) => {
          return (
            <li className='shelter-same-pets__pets-item' key={card.id}>
              <PetCard id={card.id} name={card.name} age={card.age} male={card.male} photo={card.photo} />
            </li>
          );
        })}
      </ul>
      <button className='shelter-same-pets__button' type='button'>Загрузить ещё</button>
    </section>
  );
};

export default ShelterSamePets;
