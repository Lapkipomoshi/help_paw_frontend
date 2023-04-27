import React, { useEffect, useState } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import UserContainer from '../../components/UserContainer/UserContainer';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import {
  EMAIL_REGEX, NAME_REGEX, NUMBER, PASSWORD_REGEX,
} from '../../utils/regex';
import {
  EMAIL_INVALID,
  EMAIL_NOT_FOUND,
  NAME_INVALID,
  NAME_NOT_FOUND,
  NAME_TOO_LONG,
  NAME_TOO_SHORT,
  PASSWORD_INVALID,
  PASSWORD_NOT_FOUND,
  PASSWORD_ONLY_NUMBERS,
  PASSWORD_TOO_LONG,
  PASSWORD_TOO_SHORT,
  // eslint-disable-next-line import/named
  PASSWORD_SAME_EMAIL,
} from '../../utils/errorMessage';
import MainContainer from '../../components/MainContainer/MainContainer';

const RegisterPage = ({ onRegister }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [promptText, setPromptText] = useState('Не менее 10 символов');

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const isValid = isValidName && isValidEmail && isValidPassword;

  const [disabled, setDisabled] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  function handleNameChange(e) {
    const input = e.target;
    const validName = NAME_REGEX.test(input.value);
    setIsValidName(validName);
    setUserName(input.value);
    if (input.value.length === 0) {
      setNameError(NAME_NOT_FOUND);
      setIsValidName(false);
    } else if (!validName) {
      setNameError(NAME_INVALID);
    } else if (input.value.length < 2) {
      setNameError(NAME_TOO_SHORT);
      setIsValidName(false);
    } else if (input.value.length === 20) {
      setNameError(NAME_TOO_LONG);
      setIsValidName(false);
    } else {
      setNameError('');
    }
  }

  function handleEmailChange(e) {
    const input = e.target;
    const validEmail = EMAIL_REGEX.test(input.value);
    setIsValidEmail(validEmail);
    setUserEmail(input.value);
    if (input.value.length === 0) {
      setEmailError(EMAIL_NOT_FOUND);
    } else if (input.value === userPassword) {
      setPasswordError(PASSWORD_SAME_EMAIL);
    } else if (!validEmail) {
      setEmailError(EMAIL_INVALID);
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(e) {
    const input = e.target;
    const validPassword = PASSWORD_REGEX.test(input.value);
    const passwordOnlyNumbers = NUMBER.test(input.value);
    setIsValidPassword(input.validity.valid);
    setUserPassword(input.value);
    if (input.value.length === 0) {
      setPasswordError(PASSWORD_NOT_FOUND);
    } else if (input.value === userEmail) {
      setPasswordError(PASSWORD_SAME_EMAIL);
    } else if (!validPassword) {
      setPasswordError(PASSWORD_INVALID);
      setIsValidPassword(false);
    } else if (input.value.length < 10) {
      setPasswordError(PASSWORD_TOO_SHORT);
    } else if (input.value.length > 100) {
      setPasswordError(PASSWORD_TOO_LONG);
      setIsValidPassword(false);
    } else if (passwordOnlyNumbers) {
      setPasswordError(PASSWORD_ONLY_NUMBERS);
    } else {
      setPasswordError('');
      setPromptText('');
    }
  }

  useEffect(() => {
    if (isValid && isChecked) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValid, isChecked]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({
      username: userName,
      password: userPassword,
      email: userEmail,
    });
  };

  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='register'>
          <UserContainer
            containerClass='register'
          >
            <UserForm
              title='Регистрация'
              formClass='register'
              onSubmit={handleSubmit}
              formChildren={(
                <>
                  <Input
                    labelText='Имя'
                    inputName='name'
                    inputType='text'
                    errorMessage={nameError}
                    isValid={isValidName}
                    spanText={nameError}
                    minLength='2'
                    maxLength='20'
                    pattern='[A-Za-zа-яА-ЯёЁ\d-\s]*$'
                    value={userName || ''}
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onChange={handleNameChange}
                  />

                  <Input
                    labelText='E-mail'
                    inputName='email'
                    inputType='email'
                    errorMessage={emailError}
                    isValid={isValidEmail}
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$'
                    value={userEmail || ''}
                    spanText={emailError}
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onChange={handleEmailChange}
                  />

                  <PasswordInput
                    spanText={passwordError}
                    spanPrompt={promptText}
                    errorMessage={passwordError}
                    value={userPassword || ''}
                    pattern='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$'
                    minLength='10'
                    maxLength='101'
                    isValid={isValidPassword}
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onChange={handlePasswordChange}
                  />

                  <div className='register__privacy'>
                    <label className='checkbox__container'>
                      <input type='checkbox' className='checkbox__input' onClick={handleChangeCheckbox} />
                      <span className='checkbox' />
                    </label>

                    <p className='register__agreement'>
                      Я согласен с
                      <Link className='register__privacy-link' to='/' target='_blank'> Политикой конфиденциальности</Link>
                      {' '}
                      и
                      <Link className='register__privacy-link' to='/' target='_blank'> Условиями использования сервиса</Link>
                    </p>
                  </div>

                  <Button className='user-form__button-submit_register' submit disabled={disabled}>Зарегистрироваться</Button>
                </>
              )}
            />
          </UserContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default RegisterPage;
