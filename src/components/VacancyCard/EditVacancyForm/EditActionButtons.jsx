import React, { useState } from 'react';
import { Button } from '../../../ui';
import updateDataWithToken from '../../../modules/ShelterVacancies/components/AddVacancyForm/components/apiEdit';
import { deleteVacancy } from '../../../modules/ShelterVacancies/components/AddVacancyForm/constants';
import DeleteIcon from '../../../images/DeleteIcon/DeleteIcon';

const EditActionButtons = ({ id, formData, isSubmitButtonDisabled, onSubmitSuccess, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('access');

      const updateFormData = {
        // eslint-disable-next-line
        id: formData.id,
        // eslint-disable-next-line
        position: formData.title,
        salary: formData.salary,
        is_ndfl: (() => {
          if (Array.isArray(formData.is_ndfl)) {
            // Если это массив строк, объединяем его в одну строку
            return formData.is_ndfl.join('');
          // eslint-disable-next-line
          } else if (typeof formData.is_ndfl === 'object' && formData.is_ndfl !== null) {
            // Если это объект, используем его поле slug
            return formData.is_ndfl.slug || '';
          } else {
            // Если это не массив и не объект, оставляем без изменений
            return formData.is_ndfl || '';
          }
        })(),
        // eslint-disable-next-line
        schedule: formData.schedule.map(item => item.slug),
        education: formData.education,
        description: formData.description,
      };
      // eslint-disable-next-line
      console.log('Данные в форме:', updateFormData);
      await updateDataWithToken(token, updateFormData, updateFormData.id);
      onSubmitSuccess();
    } catch (error) {
      throw new Error('Network response was not ok');
    }
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

  return (
    <div className='add-shelter-form__submit-buttons'>
      <Button type='button' submit disabled={isSubmitButtonDisabled} onClick={handleSubmit}>
        Сохранить изменения
      </Button>
      <Button onClick={() => { setIsModalOpen(true); }}>Удалить вакансию</Button>

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
