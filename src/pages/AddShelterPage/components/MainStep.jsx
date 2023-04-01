import React, { useEffect, useState } from 'react';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Button from '../../../ui/Button/Button';
import useInput from '../../../hooks/useInput';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

const MainStep = ({ currentUser, setShelter }) => {
  const username = useInput(currentUser.username, true, {
    empty: true, minLength: 4, maxLength: 50, regex: regex.NAME_REGEX,
  }, errorMessage.FIO);
  const tel = useInput('', false, { empty: true, minLength: 10, maxLength: 10 }, errorMessage.TEL);
  const email = useInput(currentUser.email, true, { empty: true, maxLength: 100, regex: regex.EMAIL_REGEX }, errorMessage.EMAIL);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (username.invalidText || tel.invalidText || email.invalidText) {
      setFormValid(false);
    } else {
      setFormValid(true);
      setShelter({
        legal_owner_name: username.value,
        phone_number: tel.value,
        email: email.value,
      });
    }
  }, [username.invalidText, tel.invalidText, email.invalidText]);

  return (
    <>
      <DeclarationInput caption='ФИО владельца приюта*' inputState={username} type='text' name='username' />
      <DeclarationInput caption='Номер телефона*' inputState={tel} type='tel' name='tel' />
      <DeclarationInput caption='E-mail*' inputState={email} type='email' name='email' />
      <div className='add-shelter-form__buttons'>
        <Button disabled={!formValid} submit>Далее</Button>
        <Button theme='transparent' to={-1} link>Отменить</Button>
      </div>
    </>
  );
};

export default MainStep;
