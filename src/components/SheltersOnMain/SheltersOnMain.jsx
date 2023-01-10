import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SheltersOnMain.css';
import ShelterCard from '../ShelterCard/ShelterCard';
import shelterImage from '../../images/shelter-image.jpg';
import shelterLogo from '../../images/shelter-logo.jpg';


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
            linkID={'/shelters/1'} />
        </li>
        <li>
          <ShelterCard
            image={shelterImage}
            logo={shelterLogo}
            title={'Приют Бирюлево'}
            address={'Востряковский пр-д, 10А, Москва, Россия'}
            workingHours={'10:00 - 18:00'}
            linkID={'/shelters/1'} />
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
