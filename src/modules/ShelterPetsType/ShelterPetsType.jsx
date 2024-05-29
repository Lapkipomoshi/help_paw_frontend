import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shelterPetsApi from './api';
import './ShelterPetsType.scss';
import PetCard from '../../components/PetCard/PetCard';
import { Button } from '../../ui';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';

const ShelterPetsType = ({ type }) => {
  const { id  } = useParams();
  const [pets, setPets] = useState([]);
  useEffect(() => {
    shelterPetsApi
      .getPetsByShelterId(id, type, 24, 0)
      .then((res) => {
        setPets(res.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  let petType;

  switch (type.toLowerCase()) {
    case 'cat':
      petType = 'Кошки';
      break;
    case 'dog':
      petType = 'Собаки';
      break;
    case 'parrot':
      petType = 'Попугаи';
      break;
    case 'hamster':
      petType = 'Хомяки';
      break;
    default:
      petType = '';
  }

  return (
    <div className='shelter-pets-type'>
      <div className='shelter-pets-type__header'>
        <h2 className='shelter-pets-type__title'>{petType}</h2>
        <div className='shelter-pets-type__controls'>
          <Button theme='tertiary' className='shelter-pets-type__btn-deleted'>
            <DeleteIcon />
            Удалить
          </Button>
          {pets.length !== 0 ? (
            <>
              <Button
                theme='tertiary'
                className='shelter-pets-type__btn-selected'
              >
                Выбрать
              </Button>
              <Button
                theme='tertiary'
                className='shelter-pets-type__btn-selected'
              >
                Выбрать все
              </Button>
            </>
          ) : (
            <Button
              theme='tertiary'
            >
              Удалить
            </Button>
          )
          }
        </div>
      </div>
      <ul className='shelter-pets-type__list'>
        {pets.map((pet) => {
          return (
            <li className='shelter-pets-type__list-item'  key={pet.id}>
              <PetCard link={`../${id}/pets/${pet.id}`} name={pet.name} age={pet.age} sex={pet.sex} gallery={pet.gallery} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShelterPetsType;