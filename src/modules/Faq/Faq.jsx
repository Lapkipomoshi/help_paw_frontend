import React from 'react';
import './Faq.css';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

const Faq = ({ faqList }) => {
  return (
    <section className='faq'>
      <h2 className='section-title'>Часто задаваемые вопросы</h2>
      <ul className='faq__list'>
        {faqList.map((card) => { // список карточек с часто задаваемыми вопросами
          return (
            <DetailsCard id={card.id} title={card.question} isOpen={false} textStyle='faq' iconType='plus-minus'>
              <p className='faq__text'>{card.answer}</p>
            </DetailsCard>
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;
