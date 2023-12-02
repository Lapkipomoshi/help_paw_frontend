import React, { useContext, useState } from 'react';
import './MyShelterEdit.scss';
import AddPhotoBlock from '../../ui/AddPhotoBlock/AddPhotoBlock';
import DeclarationInput from '../../ui/DeclarationInput/DeclarationInput';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useInput from '../../hooks/useInput';
import * as regex from '../../utils/regex';
import * as errorMessage from '../../utils/errorMessage';

const contentText = {
  PAGE_TITLE: 'Редактирование приюта',
  LABEL_TEXT_LOGO: 'Логотип приюта',
  LABEL_TEXT_PHOTO: 'Фото приюта',
};

const MyShelterEdit = () => {
  const sizeLimit = 5 * 1024 * 1024; // ограничение для размера картинки - 5 МБ
  const [logo, setLogo] = useState();
  const [mainPhoto, setMainPhoto] = useState();
  const currentUser = useContext(CurrentUserContext);
  const username = useInput(currentUser.username, {
    notEmpty: true, minLength: 4, maxLength: 50, regex: regex.NAME_REGEX,
  }, errorMessage.FIO, true);
  const tel = useInput('+7', { notEmpty: true, minLength: 18, maxLength: 18 }, errorMessage.TEL);
  const email = useInput(currentUser.email, { notEmpty: true, maxLength: 100, regex: regex.EMAIL_REGEX }, errorMessage.EMAIL, true);
  console.log(currentUser);
  
  return (
    <section className='my-shelter-edit-section'>
      <h2 className='my-shelter-edit-section__title'>{contentText.PAGE_TITLE}</h2>
      <div className='edit-my-shelter-form'>
        <div className='edit-my-shelter-form__photos'>
          <AddPhotoBlock photo={logo} setPhoto={setLogo} name='logo' sizeLimit={sizeLimit} labelText={contentText.LABEL_TEXT_LOGO} />
          <AddPhotoBlock photo={mainPhoto} setPhoto={setMainPhoto} name='mainPhoto' sizeLimit={sizeLimit} labelText={contentText.LABEL_TEXT_PHOTO} />
        </div>
        <ul className='edit-my-shelter-form__list'>
          <DeclarationInput caption='ФИО владельца приюта*' inputState={username} type='text' name='username' placeholder={currentUser.username} required />
          <DeclarationInput caption='Номер телефона*' inputState={tel} type='tel' name='tel' placeholder='+7 (9XX) XXX-XX-XX' required />
          <DeclarationInput caption='E-mail*' inputState={email} type='email' name='email' placeholder={currentUser.email} required />
        </ul>
      </div>

    </section>
  );
};

export default MyShelterEdit;