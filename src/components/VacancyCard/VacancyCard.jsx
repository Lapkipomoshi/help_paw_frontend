import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './VacancyCard.scss';
import EditIcon from '../../images/EditIcon/EditIcon';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';
import { Button } from '../../ui';

const VacancyCard = ({ id, title, salary, schedule, description, education, isLoading, onDelete }) => {
  const { isOwner } = useOutletContext();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('access');
      const response = await fetch(`http://194.58.109.129/api/v1/my-shelter/vacancies/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Ошибка при удалении вакансии');
      }
      onDelete(id);
    } catch (error) {
      throw new Error('Ошибка при удалении вакансии');
    } finally {
      setModalOpen(false);
    }
  };

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
            <button type='button' className='vacancy-card__icon-button vacancy-card__title-button_delete' onClick={() => { setModalOpen(true); }}>
              <DeleteIcon />
            </button>
          </>
        )}
      </div>
      <p className='vacancy-card__text'>{`ЗП: ${salary}`}</p>
      <p className='vacancy-card__text'>{`График работы: ${schedule.map((item) => { return item.name; }).join(', ')}`}</p>
      <p className='vacancy-card__text'>{`Образование: ${education.name}`}</p>
      <p className='vacancy-card__text'>{`Обязанности: ${description}`}</p>

      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='wrapper wrapper__del'>
            <div className='modal modal__del'>
              <div className='modal__del-text'>
                <div className='modal__title modal__del-title standard-font standard-font_type_h3'>Вы уверены, что хотите удалить вакансию?</div>
                <div className='modal__descr modal__del-descr standard-font standard-font_type_h3'>Все данные о вакансии будут удалены</div>
              </div>
              <div className='modal__btn-del'>
                <Button className='modal__btn-del-left' theme='accent' onClick={handleDelete}>
                  <DeleteIcon />
                  Да, удалить вакансию
                </Button>
                <Button theme='transparent' onClick={() => { setModalOpen(false); }}>Отменить удаление</Button>
              </div>
              <button
                type='button'
                className='modal__esc'
                onClick={() => { setModalOpen(false); }}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default VacancyCard;