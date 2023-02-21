import React, { useEffect, useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import UserContainer from '../../components/UserContainer/UserContainer';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import * as AuthApi from './AuthApi';
import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from '../../utils/regex';
import {
  EMAIL_INVALID, EMAIL_NOT_FOUND, NAME_INVALID, NAME_NOT_FOUND, NAME_TOO_LONG,
  NAME_TOO_SHORT, PASSWORD_INVALID, PASSWORD_NOT_FOUND, PASSWORD_TOO_LONG, PASSWORD_TOO_SHORT,
} from '../../utils/errorMessage';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    if (!validName) {
      setNameError(NAME_INVALID);
    } else if (input.value.length === 0) {
      setNameError(NAME_NOT_FOUND);
    } else if (input.value.length < 2) {
      setNameError(NAME_TOO_SHORT);
    } else if (input.value.length > 20) {
      setNameError(NAME_TOO_LONG);
    } else {
      setNameError('');
    }
  }

  function handleEmailChange(e) {
    const input = e.target;
    const validEmail = EMAIL_REGEX.test(input.value);
    setIsValidEmail(validEmail);
    setUserEmail(input.value);
    if (!validEmail) {
      setEmailError(EMAIL_INVALID);
    } else {
      setEmailError('');
    }
    if (input.value.length === 0) {
      setEmailError(EMAIL_NOT_FOUND);
    }
  }

  function handlePasswordChange(e) {
    const input = e.target;
    const validPassword = PASSWORD_REGEX.test(input.value);
    setIsValidPassword(input.validity.valid);
    setUserPassword(input.value);
    if (!validPassword) {
      setPasswordError(PASSWORD_INVALID);
    } else if (input.value.length < 8) {
      setPasswordError(PASSWORD_TOO_SHORT);
    } else if (input.value.length > 15) {
      setPasswordError(PASSWORD_TOO_LONG);
    } else {
      setPasswordError('');
    }
    if (input.value.length === 0) {
      setPasswordError(PASSWORD_NOT_FOUND);
    }
  }

  useEffect(() => {
    if (isValid && isChecked) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValid, isChecked]);

  function handleRegister({ username, password, email }) {
    AuthApi.register(username, password, email)
      .then(() => {
        navigate('/sign-in');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`Ошибка ${err}`);
      });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister({
      username: userName,
      password: userPassword,
      email: userEmail,
    });
  };

  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
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
                  value={userName.value || ''}
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
                  value={userEmail.value || ''}
                  spanText={emailError}
                  /* eslint-disable-next-line react/jsx-no-bind */
                  onChange={handleEmailChange}
                />

                <PasswordInput
                  spanText={passwordError}
                  errorMessage={passwordError}
                  value={userPassword.value || ''}
                  pattern='(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$'
                  minLength='8'
                  maxLength='16'
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
  );
};

export default RegisterPage;
