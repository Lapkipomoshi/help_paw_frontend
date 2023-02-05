import React from 'react';
import './Faq.css';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

const Faq = () => {
  const [faqList, setFaqList] = React.useState([]); // список часто задаваемых вопросов

  React.useEffect(() => {
    setFaqList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        title: 'Как пожертвовать деньги приюту?',
        text: 'Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”.',
      },
      {
        id: 2,
        title: 'Как взять питомца домой?',
        text: `Зайдите на страницу приюта в раздел “Питомцы“, затем выберите понравившегося и нажмате на его карточку,
        тогда Вы перейдёте на страницу питомца, где находится кнопка “Забрать домой“.`,
      },
      {
        id: 3,
        title: 'Как зарегистрировать приют?',
        text: 'Авторизуйтесь на сайте, затем перейдите на главную страницу и нажмите “Зарегистрировать приют“.',
      },
      {
        id: 4,
        title: 'Какая минимальная сумма пожертвования?',
        text: 'Любая на Ваше усмотрение.',
      },
    ]);
  }, []);

  return (
    <section className='faq'>
      <h2 className='section-title'>Часто задаваемые вопросы</h2>
      <ul className='faq__list'>
        {faqList.map((card) => { // список карточек с часто задаваемыми вопросами
          return (
            <DetailsCard key={card.id} title={card.title} isOpen={false} iconType='plus-minus'>
              <p className='faq__text'>{card.text}</p>
            </DetailsCard>
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;
