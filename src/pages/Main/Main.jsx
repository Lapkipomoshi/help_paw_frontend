import React from 'react';
import './Main.css';
import bannerImage from '../../images/main__banner.svg';

const Main = ({ loggedIn }) => {
  return (
    <main className='main'>
      <section className='banner'>
        <img className='banner__image' src={bannerImage} alt='питомцы' />
        <h1 className='banner__title'>Помогаем тем, кто в этом нуждается</h1>
        <div className='banner__line'></div>
        <p className='banner__subtitle'>Лапки помощи - это проект помощи приютам для животных.</p>
        <button className='banner__button' type='button'>Хочу помогать</button>
      </section>
      <section className='promo'>

      </section>
      <section className='shelters-on-main'>

      </section>
      <section className='papers-on-main'>

      </section>
      <section className='faq'>

      </section>
    </main>
  );
}

export default Main;
