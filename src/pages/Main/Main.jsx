import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import bannerImage from '../../images/main__banner.svg';
import faqPlus from '../../images/faq__plus.svg';
import faqMinus from '../../images/faq__minus.svg';

const Main = () => {
  return (
    <main className='main'>
      <section className='banner'>
        <img className='banner__image' src={bannerImage} alt='питомцы' />
        <h1 className='banner__title'>Помогаем тем, кто в этом нуждается</h1>
        <div className='banner__line'></div>
        <p className='banner__subtitle'>Лапки помощи - это проект помощи приютам для животных.</p>
        <Link className='banner__button' to='/map'>Хочу помогать</Link>
      </section>
      <section className='promo'>

      </section>
      <section className='shelters-on-main'>

      </section>
      <section className='papers-on-main'>

      </section>
      <section className='faq'>
        <h2 className='faq__title'>FAQ</h2>
        <div className='faq__card'>
          <div className='faq__card-row'>
            <h3 className='faq__card-title'>Как пожертвовать деньги приюту?</h3>
            <img className='faq__card-icon' src={faqMinus} alt='свернуть' />
            <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </div>
          <div className='faq__card-row'>
            <h3 className='faq__card-title'>Как взять питомца домой?</h3>
            <img className='faq__card-icon' src={faqPlus} alt='развернуть' />
            <p className='faq__card-text display_none'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </div>
          <div className='faq__card-row'>
            <h3 className='faq__card-title'>Как зарегистрировать приют?</h3>
            <img className='faq__card-icon' src={faqPlus} alt='развернуть' />
            <p className='faq__card-text display_none'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </div>
          <div className='faq__card-row'>
            <h3 className='faq__card-title'>Какая минимальная сумма пожертвования?</h3>
            <img className='faq__card-icon' src={faqPlus} alt='развернуть' />
            <p className='faq__card-text display_none'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
