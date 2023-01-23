import React from 'react';
import { useNavigate } from "react-router-dom"; // подключает хук для программной навигации
import { useInView } from 'react-intersection-observer'; // подключает хук, нужный для настройки анимации при прокрутки
import './SheltersOnMain.css';
import ShelterCard from '../ShelterCard/ShelterCard';
import shelterImage from '../../images/shelter-image.jpg';
import shelterLogo from '../../images/shelter-logo.jpg';
import Button from '../Button/Button';


const SheltersOnMain = ({ loggedIn }) => {
  const [isActiveAnimation, setIsActiveAnimation] = React.useState(false); // отобразить анимацию?
  const [isOpenPopup, setIsOpenPopup] = React.useState(false); // отобразить вспылвающее окно с предложением зарегистрироваться?

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 1, //  отображать анимацию, когда объект на экране на 100%
  });

  const handleAddShelterButton = () => {
    loggedIn ? navigate('/profile') : setIsOpenPopup(true);
  }

  React.useEffect(() => {
    setIsActiveAnimation(inView); // включать анимацию, когда объект полностью виден и убирать, когда скрывается
  }, [inView])

  return (
    <section className='shelters-on-main' onClick={() => {isOpenPopup && setIsOpenPopup(false)}}>
      <h2 className='section-title'>Приюты, которым очень нужна помощь</h2>
      <ul className='shelters-on-main__shelters-container'>
        <li>
          <ShelterCard
            image={shelterImage}
            logo={shelterLogo}
            title={'Приют Бирюлево'}
            address={'Востряковский пр-д, 10А, Москва, Россия'}
            workingHours={'10:00 - 18:00'}
            linkID={'/shelters/1'} />
        </li>
        <li>
          <ShelterCard
            image={shelterImage}
            logo={shelterLogo}
            title={'Приют Бирюлево'}
            address={'Востряковский пр-д, 10А, Москва, Россия'}
            workingHours={'10:00 - 18:00'}
            linkID={'/shelters/2'} />
        </li>
        <li>
          <ShelterCard
            image={shelterImage}
            logo={shelterLogo}
            title={'Приют Бирюлево'}
            address={'Востряковский пр-д, 10А, Москва, Россия'}
            workingHours={'10:00 - 18:00'}
            linkID={'/shelters/3'} />
        </li>
      </ul>
      <button className='button margin-left_auto' type='button' onClick={() => navigate('/shelters')}>Смотреть на карте</button>
      <div className={`shelters-on-main__text-container ${isActiveAnimation ? 'shelters-on-main__text-container_animation' : ''}`} ref={ref}>
        <h3 className='shelters-on-main__text-title'>Вы владелец приюта?</h3>
        <p className='shelters-on-main__text-subtitle'>Можете добавить ваш приют на наш сайт прямо сейчас!</p>
        <Button className={`primary margin_column-center ${!loggedIn && 'button_disabled'}`} type='button' onClick={() => handleAddShelterButton()}>Добавить приют</Button>
        <div className={`shelters-on-main__popup ${isOpenPopup && 'shelters-on-main__popup_opened'}`}>
          <p className='shelters-on-main__popup-text'>Добавить приют на сайт можно только после регистрации</p>
          <Button className='primary margin_column-center' type='link' onClick='/sign-up'>Зарегистрироваться</Button>
        </div>
      </div>
    </section>
  );
}

export default SheltersOnMain;
