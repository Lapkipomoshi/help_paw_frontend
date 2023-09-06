import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShelterSamePets.scss';
import PetCard from '../../components/PetCard/PetCard';
import Button from '../../ui/Button/Button';
import shelterSamePetsApi from './api';

const ShelterSamePets = () => {
  const { id, type } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    shelterSamePetsApi
      .getPetsByShelterId(id, type, 24, 0)
      .then((res) => {
        setPets(res.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [type]);

  return (
    <section className='shelter-section shelter-same-pets'>
      <Link className='shelter-same-pets__link' to='../pets'>
        Назад
      </Link>
      <h2 className='shelter-section__title'>Наши животные</h2>
      {pets && pets.length !== 0 ? (
        <>
          <ul className='shelter-same-pets__list'>
            {pets.map((card) => {
              return (
                <li className='shelter-same-pets__pets-item' key={card.id}>
                  <PetCard id={card.id} shelterId={card.shelter} name={card.name} age={card.age} sex={card.sex} photo={card.photo} />
                </li>
              );
            })}
          </ul>
          <Button className='shelter-same-pets__button' theme='transparent'>
            Загрузить ещё
          </Button>
        </>
      ) : (
        <p className='standard-font_type_body'>Питомцы данного вида не добавлены</p>
      )}
    </section>
  );
};

export default ShelterSamePets;
