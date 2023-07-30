import React, { useEffect } from 'react';
import IMask from 'imask';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Button from '../../../ui/Button/Button';
import useInput from '../../../hooks/useInput';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

// шаг в форме добавления приюта с анкетой о владельце приюта
const OwnerStep = ({ currentUser, setShelterOwner }) => {
  const username = useInput(currentUser.username, {
    notEmpty: true, minLength: 4, maxLength: 50, regex: regex.NAME_REGEX,
  }, errorMessage.FIO, true);
  const tel = useInput('+7', { notEmpty: true, minLength: 18, maxLength: 18 }, errorMessage.TEL);
  const email = useInput(currentUser.email, { notEmpty: true, maxLength: 100, regex: regex.EMAIL_REGEX }, errorMessage.EMAIL, true);
  const isInvalid = username.invalidText || tel.invalidText || email.invalidText;

  useEffect(() => {
    if (!isInvalid) {
      setShelterOwner({
        legal_owner_name: username.value,
        phone_number: tel.value.replace(/[-)(\s]/g, ''),
        email: email.value,
      });
    }
  }, [isInvalid]);

  useEffect(() => { // добавить маску для телефона
    const telInput = document.querySelector('.declaration-input__input[name="tel"]');
    const maskOptions = { mask: '+7 (000) 000-00-00' };
    IMask(telInput, maskOptions);
  }, []);

  return (
    <ul className='add-shelter-form__column'>
      <DeclarationInput caption='ФИО владельца приюта*' inputState={username} type='text' name='username' placeholder={currentUser.username} required />
      <DeclarationInput caption='Номер телефона*' inputState={tel} type='tel' name='tel' placeholder='+7 (9XX) XXX-XX-XX' required />
      <DeclarationInput caption='E-mail*' inputState={email} type='email' name='email' placeholder={currentUser.email} required />
      <div className='add-shelter-form__buttons'>
        <Button disabled={isInvalid} submit>Далее</Button>
        <Button theme='transparent' to={-1} link>Отменить</Button>
      </div>
    </ul>
  );
};

export default OwnerStep;
