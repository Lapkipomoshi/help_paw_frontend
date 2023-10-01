import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './VacancyCard.scss';
import EditIcon from '../../images/EditIcon/EditIcon';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';

const VacancyCard = ({ title, salary, schedule, description, education, isLoading }) => {
  const { isOwner } = useOutletContext();

  if (isLoading) {
    return null;
  }

  return (
    <li className='vacancy-card'>
      <div className='vacancy-card__title-container'>
        <h3 className='vacancy-card__title'>{title}</h3>

        {isOwner && (
          <>
            {/* TODO  <EditIcon /> функционал реализую в след PR */}
            <button type='button' className='vacancy-card__icon-button vacancy-card__icon-button_edit'>
              <EditIcon />
            </button>
            {/* TODO DeleteIcon функционал реализую в след PR */}
            <button type='button' className='vacancy-card__icon-button vacancy-card__title-button_delete'>
              <DeleteIcon />
            </button>
          </>
        )}
      </div>
      <p className='vacancy-card__text'>{`ЗП: ${salary}`}</p>
      {/* <p className='vacancy-card__text'>{`График работы: ${schedule}`}</p> */}
      <p className='vacancy-card__text'>{`График работы: ${schedule.map((item) => { return item.name; }).join(', ')}`}</p>
      <p className='vacancy-card__text'>{`Образование: ${education.name}`}</p>
      <p className='vacancy-card__text'>{`Обязанности: ${description}`}</p>
    </li>
  );
};

export default VacancyCard;
