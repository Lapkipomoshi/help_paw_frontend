import React, { useEffect, useState } from 'react';
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
  const tel = useInput('', { notEmpty: true, minLength: 10, maxLength: 10 }, errorMessage.TEL);
  const email = useInput(currentUser.email, { notEmpty: true, maxLength: 100, regex: regex.EMAIL_REGEX }, errorMessage.EMAIL, true);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (username.invalidText || tel.invalidText || email.invalidText) {
      setFormValid(false);
    } else {
      setFormValid(true);
      setShelterOwner({
        legal_owner_name: username.value,
        phone_number: tel.value,
        email: email.value,
      });
    }
  }, [username.invalidText, tel.invalidText, email.invalidText]);

  return (
    <>
      <DeclarationInput caption='ФИО владельца приюта*' inputState={username} type='text' name='username' required />
      <DeclarationInput caption='Номер телефона*' inputState={tel} type='tel' name='tel' required />
      <DeclarationInput caption='E-mail*' inputState={email} type='email' name='email' required />
      <div className='add-shelter-form__buttons'>
        <Button disabled={!formValid} submit>Далее</Button>
        <Button theme='transparent' to={-1} link>Отменить</Button>
      </div>
    </>
  );
};

export default OwnerStep;
