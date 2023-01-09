import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './SheltersOnMain.css';
import shelterLogo from '../../images/shelter-logo.svg';
import paw from '../../images/paw.svg';

const SheltersOnMain = () => {
  const [isActiveAnimation, setIsActiveAnimation] = React.useState(false); // отобразить анимацию?

  const { ref, inView } = useInView({
    threshold: 1,
  });

  React.useEffect(() => {
    if (inView) {
      setIsActiveAnimation(true);
    };
  }, [inView])

  return (
    <section className='shelters-on-main'>
      <h2 className='section-title'>Приюты, которым очень нужна помощь</h2>
      <ul className='shelters-on-main__shelters-container'>
        <li className='shelter-card'>
          <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
          <h3 className='shelter-card__title'>Приют Бирюлево</h3>
          <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
          <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
          <Link className='shelter-card__link' to='/shelters'>Читать подробнее</Link>
          <img className='shelter-card__paw' src={paw} alt='ЧП' />
        </li>
        <li className='shelter-card'>
          <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
          <h3 className='shelter-card__title'>Приют Бирюлево</h3>
          <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
          <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
          <Link className='shelter-card__link' to='/shelters'>Читать подробнее</Link>
          <img className='shelter-card__paw' src={paw} alt='ЧП' />
        </li>
        <li className='shelter-card'>
          <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
          <h3 className='shelter-card__title'>Приют Бирюлево</h3>
          <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
          <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
          <Link className='shelter-card__link' to='/shelters'>Читать подробнее</Link>
          <img className='shelter-card__paw' src={paw} alt='ЧП' />
        </li>
      </ul>
      <button className='button margin-left_auto' to='/map'>Смотреть на карте</button>
      <div className={`shelters-on-main__text-container ${isActiveAnimation ? 'shelters-on-main__text-container_animation' : ''}`} ref={ref}>
        <h3 className='shelters-on-main__text-title'>Вы владелец приюта?</h3>
        <p className='shelters-on-main__text-subtitle'>Можете добавить ваш приют на наш сайт прямо сейчас!</p>
        <button className='button margin_column-center' disabled>Добавить приют</button>
      </div>
    </section>
  );
}

export default SheltersOnMain;
