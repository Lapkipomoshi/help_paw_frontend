import React from 'react';
import './Faq.css';
import FaqCard from '../../components/FaqCard/FaqCard';

const Faq = () => {
  return (
    <section className='faq'>
      <h2 className='section-title'>Часто задаваемые вопросы</h2>
      <ul className='faq__list'>
        <FaqCard title='Как пожертвовать деньги приюту?' isOpen>
          <p className='faq__text'>
            Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”
          </p>
        </FaqCard>
        <FaqCard title='Как взять питомца домой?' isOpen={false}>
          <p className='faq__text'>
            Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”
          </p>
        </FaqCard>
        <FaqCard title='Как зарегистрировать приют?' isOpen={false}>
          <p className='faq__text'>
            Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”
          </p>
        </FaqCard>
        <FaqCard title='Какая минимальная сумма пожертвования?' isOpen={false}>
          <p className='faq__text'>
            Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”
          </p>
        </FaqCard>
      </ul>
    </section>
  );
};

export default Faq;
