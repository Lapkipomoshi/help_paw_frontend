import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../ui/Button/Button';

const StepAdditional = ({
  handleChangeCheckbox, logo, handleLogo, handleBack,
}) => {
  return (
    <>
      <label className='add-shelter-form__caption'>Логотип приюта</label>
      <div className='add-shelter-form__photo-block'>
        <label>
          <input onChange={handleLogo} id='photo-input' type='file' name='logo' accept='.jpg, .jpeg, .png' />
          <img className={`add-shelter-form__logo ${!logo && 'add-shelter-form__logo_hidden'}`} src={logo} alt='' />
        </label>
      </div>
      <label className='add-shelter-form__caption'>Часы приюта*</label>
      <div className='add-shelter-form__clock'>
        <input className='add-shelter-form__time-input' type='text' name='working_from_hour' placeholder='00:00' required />
        <p>-</p>
        <input className='add-shelter-form__time-input' type='text' name='working_from_hour' placeholder='00:00' required />
      </div>
      <div className='add-shelter-form__flex'>
        <div className='add-shelter-form__column'>
          <label className='add-shelter-form__caption'>Название приюта*</label>
          <input className='add-shelter-form__input' type='text' name='name' required />
          <label className='add-shelter-form__caption'>ИНН*</label>
          <input className='add-shelter-form__input' type='number' name='INN' required />
          <label className='add-shelter-form__caption'>Ссылка на сайт приюта</label>
          <input className='add-shelter-form__input' type='url' name='web_site' />
          <label className='add-shelter-form__caption'>Ссылка на канал приюта в &laquo;Telegram&raquo;</label>
          <input className='add-shelter-form__input' type='url' name='telegram' />
        </div>
        <div className='add-shelter-form__column'>
          <label className='add-shelter-form__caption'>Виды животных*</label>
          <input className='add-shelter-form__input' type='text' name='animal' required />
          <label className='add-shelter-form__caption'>Адрес приюта*</label>
          <input className='add-shelter-form__input' type='text' name='address' required />
          <label className='add-shelter-form__caption'>Ссылка на группу приюта в &laquo;Одноклассники&raquo;</label>
          <input className='add-shelter-form__input' type='url' name='ok_page' />
          <label className='add-shelter-form__caption'>Ссылка на группу приюта в &laquo;VK&raquo;</label>
          <input className='add-shelter-form__input' type='url' name='vk_page' />
        </div>
      </div>
      <label className='add-shelter-form__caption'>Описание приюта*</label>
      <textarea className='add-shelter-form__textarea' name='description' required />
      <div className='register__privacy'>
        <label className='checkbox__container'>
          <input type='checkbox' className='checkbox__input' onClick={handleChangeCheckbox} />
          <span className='checkbox' />
        </label>
        <p className='register__agreement'>
          Я согласен с
          <Link className='register__privacy-link' to='/' target='_blank'> Политикой конфиденциальности </Link>
          и
          <Link className='register__privacy-link' to='/' target='_blank'> Условиями использования сервиса</Link>
        </p>
      </div>
      <div className='add-shelter-form__buttons'>
        <Button submit>Добавить приют</Button>
        <Button theme='transparent' onClick={handleBack}>Назад</Button>
      </div>
    </>
  );
};

export default StepAdditional;
