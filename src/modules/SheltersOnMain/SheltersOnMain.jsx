import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // подключает хук для программной навигации
import { useInView } from 'react-intersection-observer'; // подключает хук, нужный для настройки анимации при прокрутки
import './SheltersOnMain.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import ShelterCard from '../../components/ShelterCard/ShelterCard';
import Button from '../../ui/Button/Button';

const SheltersOnMain = ({ loggedIn, sheltersList }) => {
  const [isActiveAnimation, setIsActiveAnimation] = useState(false); // отобразить анимацию?
  const [isOpenPopup, setIsOpenPopup] = useState(false); // отобразить вспылвающее окно с предложением зарегистрироваться?

  const navigate = useNavigate(); // функция для программной навигации

  const { ref, inView } = useInView({
    threshold: 1, //  отображать анимацию, когда объект на экране на 100%
  });

  const handleAddShelterButton = () => {
    // eslint-disable-next-line no-unused-expressions
    loggedIn ? navigate('/add-shelter') : setIsOpenPopup(true);
  };

  useEffect(() => {
    setIsActiveAnimation(inView); // включать анимацию, когда объект полностью виден и убирать, когда скрывается
  }, [inView]);

  return (
    <MainContainer>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <section
        className='shelters-on-main'
        onClick={() => {
          // eslint-disable-next-line no-unused-expressions
          isOpenPopup && setIsOpenPopup(false);
        }}
      >
        <h2 className='section-title'>Приюты, которым очень нужна помощь</h2>
        <ul className='shelters-on-main__shelters-container'>
          {(sheltersList && sheltersList.length !== 0)
            ? sheltersList.map((shelter) => {
              return (
                <li key={shelter.id}>
                  <ShelterCard
                    id={shelter.id}
                    name={shelter.name}
                    address={shelter.address}
                    workingFromHour={shelter.working_from_hour}
                    workingToHour={shelter.working_to_hour}
                    workingHours={shelter.working_hours}
                    logo={shelter.logo}
                    profileImage={shelter.profile_image}
                  />
                </li>
              );
            })
            : <p>Не удалось загрузить приюты</p>}
        </ul>
        <Button className='shelters-on-main__map-button' to='/shelters' link>Приюты на карте</Button>
        <div
          className={`shelters-on-main__text-container ${isActiveAnimation ? 'shelters-on-main__text-container_animation' : ''}`}
          ref={ref}
        >
          <h3 className='shelters-on-main__text-title'>Вы владелец приюта?</h3>
          <p className='shelters-on-main__text-subtitle'>Можете добавить ваш приют на наш сайт прямо сейчас!</p>
          <Button className={` ${!loggedIn && 'button__accent_disabled'}`} onClick={handleAddShelterButton}>Добавить приют</Button>
          <div className={`shelters-on-main__popup ${isOpenPopup && 'shelters-on-main__popup_opened'}`}>
            <p className='shelters-on-main__popup-text'>Добавить приют на сайт можно только после регистрации</p>
            <Button className='margin_column-center' to='/sign-up' link>Зарегистрироваться</Button>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default SheltersOnMain;
