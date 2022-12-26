import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className='faq'>
      <h2 className='faq__title section-title'>FAQ</h2>
      <ul className='faq__list'>
        <li className='faq__card'>
          <details className='faq__detalis' open>
            <summary className='faq__card-row'>
              <h3 className='faq__card-title'>Как пожертвовать деньги приюту?</h3>
              <div className='faq__card-icon' />
            </summary>
            <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </details>
        </li>
        <li className='faq__card'>
          <details className='faq__detalis'>
            <summary className='faq__card-row'>
              <h3 className='faq__card-title'>Как взять питомца домой?</h3>
              <div className='faq__card-icon' />
            </summary>
            <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </details>
        </li>
        <li className='faq__card'>
          <details className='faq__detalis'>
            <summary className='faq__card-row'>
              <h3 className='faq__card-title'>Как зарегистрировать приют?</h3>
              <div className='faq__card-icon' />
            </summary>
            <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </details>
        </li>
        <li className='faq__card'>
          <details className='faq__detalis'>
            <summary className='faq__card-row'>
              <h3 className='faq__card-title'>Какая минимальная сумма пожертвования?</h3>
              <div className='faq__card-icon' />
            </summary>
            <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
          </details>
        </li>
      </ul>
    </section>
  );
}

export default FAQ;
