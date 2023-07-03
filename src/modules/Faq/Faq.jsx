import React from 'react';
import './Faq.css';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import MainContainer from '../../components/MainContainer/MainContainer';

const Faq = ({ faqList }) => {
  return (
    <MainContainer base='additional'>
      <section className='faq' id='faq'>
        <h2 className='section-title'>Часто задаваемые вопросы</h2>
        <ul className='faq__list'>
          {faqList && faqList.length !== 0 ? (
            // список карточек с часто задаваемыми вопросами
            faqList.map((card) => {
              return (
                <li className='faq__item' key={card.id}>
                  <DetailsCard
                    title={card.question}
                    isOpen={false}
                    textStyle='faq'
                    iconType='plus-minus'
                    titleClasses='standard-font_type_h3 faq__title'
                    containerClasses='faq__container'
                  >
                    <p className='faq__text'>{card.answer}</p>
                  </DetailsCard>
                </li>
              );
            })
          ) : (
            <p>Не удалось загрузить список вопросов</p>
          )}
        </ul>
      </section>
    </MainContainer>
  );
};

export default Faq;
