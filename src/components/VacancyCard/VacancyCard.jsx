import React from 'react';
import './VacancyCard.css';

const VacancyCard = ({
  title, salary, workSchedule, charge,
}) => {
  return (
    <li className='vacancy-card'>
      <h3 className='vacancy-card__title'>{title}</h3>
      <p className='vacancy-card__text'>{`ЗП: ${salary}`}</p>
      <p className='vacancy-card__text'>{`График работы: ${workSchedule}`}</p>
      <p className='vacancy-card__text'>{`Обязанности: ${charge}`}</p>
    </li>
  );
};

export default VacancyCard;
