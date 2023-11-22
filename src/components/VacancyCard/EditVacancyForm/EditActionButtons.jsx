import React, { useState } from 'react';
import { Button } from '../../../ui';
import DeleteIcon from '../../../images/DeleteIcon/DeleteIcon';
import { updateVacancy, deleteVacancy } from '../../../modules/ShelterVacancies/components/AddVacancyForm/components/vacanciesAPI';

const EditActionButtons = ({ formData, isSubmitButtonDisabled, onDelete, onClose, onSubmitSuccess, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('access');

      const getFormattedValue = (value) => {
        if (Array.isArray(value)) {
          return value.join('');
        }
        if (typeof value === 'object' && value !== null) {
          return value.slug || '';
        }
        return value || '';
      };

      const formattedSchedule = formData.schedule.map((item) => {
        if (typeof item === 'object' && item !== null && item.slug) {
          return item.slug;
        }
        return item;
      });

      const updateFormData = {
        id: formData.id,
        position: formData.title,
        salary: formData.salary,
        is_ndfl: getFormattedValue(formData.is_ndfl),
        schedule: formattedSchedule,
        education: getFormattedValue(formData.education),
        description: formData.description,
      };
      await updateVacancy(token, updateFormData, updateFormData.id);
      onSubmitSuccess();
      onClose();
    } catch (error) {
      throw new Error('Network response was not ok');
    }
  };

  const handleDelete = async () => {
    try {
      const isDeleted = await deleteVacancy(formData.id);
      if (isDeleted) {
        onDelete(formData.id);
      }
    } catch (error) {
      throw new Error('Ошибка при удалении вакансии');
    } finally {
      setIsModalOpen(false);
      onClose();
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className='shelter-form__submit-buttons'>
      <div className='btn-edit'>
        <Button className='btn-edit__buttons' disabled={isSubmitButtonDisabled} onClick={handleSubmit}>
          Сохранить изменения
        </Button>
        <Button className='btn-edit__buttons' theme='transparent' onClick={() => { setIsModalOpen(true); }}>
          Удалить вакансию
        </Button>
      </div>

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
    </div>
  );
};

export default EditActionButtons;