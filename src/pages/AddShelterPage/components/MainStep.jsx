import React, { useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import useInput from '../../../hooks/useInput';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

const MainStep = ({ currentUser }) => {
  const username = useInput(currentUser.username, true, {
    empty: true, minLength: 4, maxLength: 50, regex: regex.NAME_REGEX,
  }, errorMessage.FIO);
  const tel = useInput('', false, { empty: true, minLength: 10, maxLength: 10 }, errorMessage.TEL);
  const email = useInput(currentUser.email, true, { empty: true, regex: regex.EMAIL_REGEX }, errorMessage.EMAIL);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (username.invalidText || tel.invalidText || email.invalidText) ? setFormValid(false) : setFormValid(true);
  }, [username.invalidText, tel.invalidText, email.invalidText]);

  return (
    <>
      <label className='add-shelter-form__caption' placeholder={currentUser}>ФИО владельца приюта*</label>
      <input
        className='add-shelter-form__input'
        value={username.value}
        onChange={(e) => { username.onChange(e); }}
        type='text'
        name='username'
        placeholder={currentUser.userName}
        required
      />
      <p className='add-shelter-form__error'>{username.invalidText}</p>
      <label className='add-shelter-form__caption'>Номер телефона*</label>
      <input
        className='add-shelter-form__input'
        value={tel.value}
        onChange={(e) => { tel.onChange(e); }}
        type='tel'
        name='tel'
        placeholder='+7 (900) 000-00-00'
        onBlur={tel.onBlur}
        required
      />
      <p className='add-shelter-form__error'>{tel.dirty && tel.invalidText}</p>
      <label className='add-shelter-form__caption'>E-mail*</label>
      <input
        className='add-shelter-form__input'
        value={email.value}
        onChange={(e) => { email.onChange(e); }}
        type='email'
        name='email'
        placeholder={currentUser.email}
        required
      />
      <p className='add-shelter-form__error'>{email.invalidText}</p>
      <div className='add-shelter-form__buttons'>
        <Button disabled={!formValid} submit>Далее</Button>
        <Button theme='transparent' to={-1} link>Отменить</Button>
      </div>
    </>
  );
};

export default MainStep;
