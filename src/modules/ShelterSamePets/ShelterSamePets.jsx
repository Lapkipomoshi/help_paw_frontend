import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShelterSamePets.scss';
import PetCard from '../../components/PetCard/PetCard';
import Button from '../../ui/Button/Button';
import shelterApi from '../../pages/ShelterPage/api';

const ShelterSamePets = () => {
  const { id, type } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    shelterApi.getPetsByShelterId(id, type, 24, 0)
      .then((res) => { setPets(res); })
      .catch((err) => { throw new Error(err); });
  }, [type]);

  return (
    <section className='shelter-section shelter-same-pets'>
      <Link className='shelter-same-pets__link' to='../pets'>Назад</Link>
      <h2 className='shelter-section__title'>Наши животные</h2>
      <ul className='shelter-same-pets__list'>
        {(pets && pets.length !== 0)
          ? pets.map((card) => {
            return (
              <li className='shelter-same-pets__pets-item' key={card.id}>
                <PetCard id={card.id} name={card.name} age={card.age} male={card.male} photo={card.photo} />
              </li>
            );
          })
          : <p>Питомцы данного вида не добавлены</p>}
      </ul>
      <Button className='shelter-same-pets__button' theme='transparent'>Загрузить ещё</Button>
    </section>
  );
};

export default ShelterSamePets;
