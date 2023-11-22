import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './VacancyCard.scss';
import EditIcon from '../../images/EditIcon/EditIcon';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';
import { Button } from '../../ui';
import EditVacancyForm from './EditVacancyForm/EditVacancyForm';
import { deleteVacancy } from '../../modules/ShelterVacancies/components/AddVacancyForm/components/vacanciesAPI';

// eslint-disable-next-line
const VacancyCard = ({ id, title, salary, schedule, description, education, is_ndfl, isLoading, onDelete, onSubmitSuccess, openEditForm, isOpenVacancyForm }) => {
  const { isOwner } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  // eslint-disable-next-line
  const convertedIsNdfl = is_ndfl === 'ndfl' ? { slug: 'ndfl', name: 'с НДФЛ' } : { slug: 'no_ndfl', name: 'на руки' };

  const handleEditFormClose = () => {
    setIsEditFormOpen(false);
  };

  const handleEditFormOpen = () => {
    openEditForm({
      id,
      title,
      salary,
      schedule,
      description,
      education,
      // eslint-disable-next-line
      is_ndfl: convertedIsNdfl,
    });
  };

  const handleDelete = async () => {
    try {
      const isDeleted = await deleteVacancy(id);
      if (isDeleted) {
        onDelete(id);
      }
    } catch (error) {
      throw new Error('Ошибка при удалении вакансии');
    } finally {
      setIsModalOpen(false);
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
          <div className='vacancy-card__icon'>
            <button
              type='button'
              className='vacancy-card__icon-button vacancy-card__icon-button_edit'
              onClick={handleEditFormOpen}
              disabled={isOpenVacancyForm}
            >
              <EditIcon />
            </button>
            <button
              type='button'
              className='vacancy-card__icon-button vacancy-card__title-button_delete'
              onClick={() => { setIsModalOpen(true); }}
            >
              <DeleteIcon />
            </button>
          </div>
        )}
      </div>
      {/* eslint-disable-next-line */}
      <p className='vacancy-card__text'>{`ЗП: ${salary} рублей ${is_ndfl === 'ndfl' ? 'с НДФЛ' : 'на руки'}`}</p>
      <p className='vacancy-card__text'>{`График работы: ${schedule.map((item) => { return item.name; }).join(', ')}`}</p>
      <p className='vacancy-card__text'>{`Образование: ${education.name}`}</p>
      <p className='vacancy-card__text'>{`Обязанности: ${description}`}</p>

      {isEditFormOpen && (
        <EditVacancyForm
          id={id}
          title={title}
          salary={salary}
          education={education}
          schedule={schedule}
          is_ndfl={convertedIsNdfl}
          description={description}
          onDelete={handleDelete}
          onClose={handleEditFormClose}
          onSubmitSuccess={onSubmitSuccess}
          isLoading={isLoading}
        />
      )}

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
                <Button theme='transparent' onClick={() => { setIsModalOpen(false); }}>Отменить удаление</Button>
              </div>
              <button
                type='button'
                className='modal__esc'
                onClick={() => { setIsModalOpen(false); }}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default VacancyCard;