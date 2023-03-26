import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AddShelterPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';

const AddShelterPage = ({ currentUser }) => {
  const [step, setStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [logo, setLogo] = useState();

  const handleChangeCheckbox = () => { setIsChecked(!isChecked); };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log('отправить форму');
    }
  };

  const handleLogo = (e) => {
    const { target } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setLogo(fileReader.result);
    };
    fileReader.readAsDataURL(target.files[0]);
  };

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <MainContainer theme='base'>
      <main className='main add-shelter'>
        <div className='add-shelter__title-block'>
          <h2 className='add-shelter__title'>Добавить приют</h2>
          <p className='add-shelter__step'>{`шаг ${step} из 2`}</p>
        </div>
        <p className='add-shelter__subtitle'>Чтобы добавить приют, заполните, пожалуйста, данные о владельце приюта.</p>
        <form className='add-shelter-form' name='add-shelter' onSubmit={handleSubmitForm} noValidate>
          {step === 1 && (
            <>
              <label className='add-shelter-form__caption'>ФИО владельца приюта*</label>
              <input className='add-shelter-form__input' type='text' name='owner' required />
              <label className='add-shelter-form__caption'>Номер телефона*</label>
              <input className='add-shelter-form__input' type='tel' name='phone' required />
              <label className='add-shelter-form__caption'>E-mail*</label>
              <input className='add-shelter-form__input' type='email' name='email' required />
              <div className='add-shelter-form__buttons'>
                <Button submit>Далее</Button>
                <Button theme='transparent'>Отменить</Button>
              </div>
            </>
          )}
          {step === 2 && (
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
                <Button theme='transparent' onClick={() => { setStep(1); }}>Назад</Button>
              </div>
            </>
          )}
        </form>
      </main>
    </MainContainer>
  );
};

export default AddShelterPage;
