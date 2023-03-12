import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AddShelterPage.css';

// eslint-disable-next-line no-unused-vars
const AddShelterPage = ({ currentUser }) => {
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckbox = () => { setIsChecked(!isChecked); };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log('отправить форму');
    }
  };

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <main className='main add-shelter'>
      <div className='add-shelter__title-block'>
        <h2 className='add-shelter__title'>Добавить приют</h2>
        <p>{`шаг ${step} из 2`}</p>
      </div>
      <p className='add-shelter__subtitle'>Чтобы добавить приют, заполните, пожалуйста, данные о владельце приюта.</p>
      <form className='add-shelter-form' name='add-shelter' onSubmit={handleSubmitForm} noValidate>
        {step === 1 && (
          <>
            <p className='add-shelter-form__caption'>ФИО владельца приюта*</p>
            <input className='add-shelter-form__input' type='text' name='owner' />
            <p className='add-shelter-form__caption'>Номер телефона*</p>
            <input className='add-shelter-form__input' type='tel' name='phone' />
            <p className='add-shelter-form__caption'>E-mail*</p>
            <input className='add-shelter-form__input' type='email' name='email' />
            <button className='add-shelter-form__next-button' type='submit'>Далее</button>
            <button className='add-shelter-form__back-button' type='button'>Отменить</button>
          </>
        )}
        {step === 2 && (
          <>
            <p className='add-shelter-form__caption'>Логотип приюта</p>
            <input className='add-shelter-form__input' type='file' name='logo' />
            <p className='add-shelter-form__caption'>Часы приюта*</p>
            <div className='add-shelter-form__clock'>
              <input className='add-shelter-form__time-input' type='time' name='working_from_hour' />
              <p className='add-shelter-form__dash'>-</p>
              <input className='add-shelter-form__time-input' type='time' name='working_from_hour' />
            </div>
            <div className='add-shelter-form__flex'>
              <div className='add-shelter-form__column'>
                <p className='add-shelter-form__caption'>Название приюта*</p>
                <input className='add-shelter-form__input' type='text' name='name' />
                <p className='add-shelter-form__caption'>ИНН*</p>
                <input className='add-shelter-form__input' type='number' name='INN' />
                <p className='add-shelter-form__caption'>Ссылка на сайт приюта</p>
                <input className='add-shelter-form__input' type='url' name='web_site' />
                <p className='add-shelter-form__caption'>Ссылка на канал приюта в &laquo;Telegram&raquo;</p>
                <input className='add-shelter-form__input' type='url' name='telegram' />
              </div>
              <div className='add-shelter-form__column'>
                <p className='add-shelter-form__caption'>Виды животных*</p>
                <input className='add-shelter-form__input' type='text' name='animal' />
                <p className='add-shelter-form__caption'>Адрес приюта*</p>
                <input className='add-shelter-form__input' type='text' name='address' />
                <p className='add-shelter-form__caption'>Ссылка на группу приюта в &laquo;Одноклассники&raquo;</p>
                <input className='add-shelter-form__input' type='url' name='ok_page' />
                <p className='add-shelter-form__caption'>Ссылка на группу приюта в &laquo;VK&raquo;</p>
                <input className='add-shelter-form__input' type='url' name='vk_page' />
              </div>
            </div>
            <p className='add-shelter-form__caption'>Описание приюта*</p>
            <textarea className='add-shelter-form__textarea' name='description' />
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
            <button className='add-shelter-form__next-button' type='submit'>Добавить приют</button>
            <button className='add-shelter-form__back-button' type='button' onClick={() => { setStep(1); }}>Назад</button>
          </>
        )}
      </form>
    </main>
  );
};

export default AddShelterPage;
