import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.scss';
import UserForm from '../../components/UserForm/UserForm';
import UserContainer from '../../components/UserContainer/UserContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import {
  EMAIL_REGEX, NAME_REGEX, NUMBER, PASSWORD_REGEX, SYMBOL,
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
  PASSWORD_SAME_EMAIL,
  NAME_ONLY_SYMBOLS,
} from '../../utils/errorMessage';

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

  const handleNameChange = (e) => {
    const input = e.target;
    const validName = NAME_REGEX.test(input.value);
    const nameOnlySymbols = SYMBOL.test(input.value);
    setIsValidName(validName);
    setUserName(input.value);
    if (input.value.length === 0) {
      setNameError(NAME_NOT_FOUND);
      setIsValidName(false);
    } else if (!validName) {
      setNameError(NAME_INVALID);
    } else if (input.value.length < input.minLength) {
      setNameError(NAME_TOO_SHORT);
      setIsValidName(false);
    } else if (input.value.length > input.maxLength) {
      setNameError(NAME_TOO_LONG);
      setIsValidName(false);
    } else if (nameOnlySymbols) {
      setNameError(NAME_ONLY_SYMBOLS);
      setIsValidName(false);
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target;
    const validEmail = EMAIL_REGEX.test(input.value);
    setIsValidEmail(validEmail);
    setUserEmail(input.value);
    if (input.value.length === 0) {
      setEmailError(EMAIL_NOT_FOUND);
    } else if (input.value === userPassword) {
      setPasswordError(PASSWORD_SAME_EMAIL);
      setIsValidPassword(false);
    } else if (!validEmail) {
      setEmailError(EMAIL_INVALID);
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target;
    const validPassword = PASSWORD_REGEX.test(input.value);
    const passwordOnlyNumbers = NUMBER.test(input.value);
    setIsValidPassword(input.validity.valid);
    setUserPassword(input.value);
    if (input.value.length === 0) {
      setPasswordError(PASSWORD_NOT_FOUND);
    } else if (input.value === userEmail) {
      setPasswordError(PASSWORD_SAME_EMAIL);
      setIsValidPassword(false);
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
      setIsValidPassword(false);
    } else {
      setPasswordError('');
      setPromptText('');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({
      username: userName,
      password: userPassword,
      email: userEmail,
    });
    setDisabled(true);
  };

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isValid && isChecked) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValid, isChecked]);

  return (
    <MainContainer>
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
                    maxLength='50'
                    pattern='[A-Za-zа-яА-ЯёЁ\d-\s]*$'
                    value={userName || ''}
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
                    onChange={handlePasswordChange}
                  />

                  <div className='register__privacy'>
                    <label className='checkbox__container'>
                      <input className='checkbox__input' type='checkbox' onClick={handleChangeCheckbox} />
                      <span className='checkbox' />
                    </label>

                    <p className='register__text standard-font standard-font_type_small'>
                      Я согласен с
                      {' '}
                      <Link
                        className='register__link standard-font standard-font_type_small'
                        to='/privacy'
                        target='_blank'
                      >
                        Политикой конфиденциальности
                      </Link>
                      {' '}
                      и
                      {' '}
                      <Link
                        className='register__link standard-font standard-font_type_small'
                        to='/terms'
                        target='_blank'
                      >
                        Условиями использования сервиса
                      </Link>
                    </p>
                  </div>

                  <Button className='user-form__button-submit_register' submit disabled={disabled}>Зарегистрироваться</Button>

                  <p className='register__text standard-font standard-font_type_base'>
                    Уже есть аккаунт?
                    {' '}
                    <Link
                      className='register__link standard-font standard-font_type_base'
                      to='/sign-in'
                    >
                      Вход
                    </Link>
                  </p>
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
