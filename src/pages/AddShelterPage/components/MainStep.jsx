import React, { useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

const MainStep = ({ currentUser }) => {
  const [username, setUsername] = useState('');
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [usernameError, setUsernameError] = useState();
  const [tel, setTel] = useState();
  const [telDirty, setTelDirty] = useState(false);
  const [telError, setTelError] = useState(errorMessage.TEL.NOT_FOUND);
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState();
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
    case 'username':
      setUsernameDirty(true);
      break;
    case 'tel':
      setTelDirty(true);
      break;
    case 'email':
      setEmailDirty(true);
      break;
    default:
      break;
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (!regex.NAME_REGEX.test(e.target.value)) {
      if (!e.target.value) {
        setUsernameError(errorMessage.NAME_NOT_FOUND);
      } else {
        setUsernameError(errorMessage.NAME_INVALID);
      }
    } else {
      setUsernameError('');
    }
  };

  const handleTel = (e) => {
    setTel(e.target.value);
    if (!regex.TEL.test(e.target.value)) {
      if (!e.target.value) {
        setTelError(errorMessage.TEL.NOT_FOUND);
      } else {
        setTelError(errorMessage.TEL.INVALID);
      }
    } else {
      setTelError('');
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!regex.EMAIL_REGEX.test(e.target.value)) {
      if (!e.target.value) {
        setEmailError(errorMessage.EMAIL_NOT_FOUND);
      } else {
        setEmailError(errorMessage.EMAIL_INVALID);
      }
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (usernameError || telError || emailError) ? setFormValid(false) : setFormValid(true);
  }, [usernameError, telError, emailError]);

  useEffect(() => {
    setUsername(currentUser.username);
    setEmail(currentUser.email);
  }, []);

  return (
    <>
      <label className='add-shelter-form__caption' placeholder={currentUser}>ФИО владельца приюта*</label>
      <input
        className='add-shelter-form__input'
        value={username}
        onChange={(e) => { handleUsername(e); }}
        type='text'
        name='username'
        placeholder={currentUser.userName}
        onBlur={(e) => { blurHandler(e); }}
        required
      />
      <p className='add-shelter-form__error'>{(usernameDirty && usernameError) && usernameError}</p>
      <label className='add-shelter-form__caption'>Номер телефона*</label>
      <input
        className='add-shelter-form__input'
        value={tel}
        onChange={(e) => { handleTel(e); }}
        type='tel'
        name='tel'
        placeholder='+7 (900) 000-00-00'
        onBlur={(e) => { blurHandler(e); }}
        required
      />
      <p className='add-shelter-form__error'>{(telDirty && telError) && telError}</p>
      <label className='add-shelter-form__caption'>E-mail*</label>
      <input
        className='add-shelter-form__input'
        value={email}
        onChange={(e) => { handleEmail(e); }}
        type='email'
        name='email'
        placeholder={currentUser.email}
        onBlur={(e) => { blurHandler(e); }}
        required
      />
      <p className='add-shelter-form__error'>{(emailDirty && emailError) && emailError}</p>
      <div className='add-shelter-form__buttons'>
        <Button disabled={!formValid} submit>Далее</Button>
        <Button theme='transparent' to={-1} link>Отменить</Button>
      </div>
    </>
  );
};

export default MainStep;
