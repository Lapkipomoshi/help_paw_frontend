import React from 'react';
import './Faq.css';
import DetalisCard from '../../components/DetalisCard/DetalisCard';

const Faq = () => {
  return (
    <section className='faq'>
      <h2 className='section-title'>Часто задаваемые вопросы</h2>
      <ul className='faq__list'>
        <DetalisCard title='Как пожертвовать деньги приюту?' isOpen>
          <p className='faq__text'>
            Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”.
          </p>
        </DetalisCard>
        <DetalisCard title='Как взять питомца домой?' isOpen={false}>
          <p className='faq__text'>
            Зайдите на страницу приюта в раздел “Питомцы“, затем выберите понравившегося и нажмате на его карточку,
            тогда Вы перейдёте на страницу питомца, где находится кнопка “Забрать домой“.
          </p>
        </DetalisCard>
        <DetalisCard title='Как зарегистрировать приют?' isOpen={false}>
          <p className='faq__text'>
            Авторизуйтесь на сайте, затем перейдите на главную страницу и нажмите “Зарегистрировать приют“.
          </p>
        </DetalisCard>
        <DetalisCard title='Какая минимальная сумма пожертвования?' isOpen={false}>
          <p className='faq__text'>
            Любая на Ваше усмотрение.
          </p>
        </DetalisCard>
      </ul>
    </section>
  );
};

export default Faq;
