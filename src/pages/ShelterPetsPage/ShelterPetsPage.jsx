import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterPetsPage.scss';
import Button from '../../ui/Button/Button';
import ShelterPetsType from '../../modules/ShelterPetsType/ShelterPetsType';

const ShelterPetsPage = () => {
  const { shelter } = useOutletContext();

  return (
    <div className='shelter-pets'>
      <div className='shelter-pets__header'>
        <h1 className='shelter-pets__title'>Питомцы приюта {shelter.name}</h1>
        <p className='shelter-pets__all-pets'>Всего питомцев: <span>{shelter.count_pets}</span></p>
        <Button className='shelter-pets__add-pets-button'>Добавить питомца</Button>
      </div>
      {shelter.animal_types && shelter.animal_types.length ? (
        <>
          {shelter.animal_types.map((type) => {
            return (
              <ShelterPetsType type={type} key={type} />
            );
          })}
          <Button className='shelter-pets__load-more-button' theme='transparent'>
            Загрузить ещё
          </Button>
        </>
      ) : (
        <p className='standard-font_type_body'>На данный момент в приюте животных нет</p>
      )}
    </div>
  );
};

export default ShelterPetsPage;