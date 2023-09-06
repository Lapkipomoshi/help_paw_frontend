import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterPets.css';
import PetTypeCard from '../../components/PetTypeCard/PetTypeCard';

const ShelterPets = () => {
  const { shelter } = useOutletContext();

  return (
    <section className='shelter-section shelter-pets'>
      <h2 className='shelter-section__title'>Наши животные</h2>
      <ul className='shelter-pets__list'>
        {shelter.animal_types &&
          shelter.animal_types.map((type) => {
            return (
              <li className='shelter-pets__pets-item' key={type}>
                <PetTypeCard shelterId={shelter.id} type={type} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ShelterPets;
