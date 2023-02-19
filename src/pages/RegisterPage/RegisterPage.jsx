import React, { useEffect, useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import UserContainer from '../../components/UserContainer/UserContainer';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import * as AuthApi from './AuthApi';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
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
    const validName = /^[a-zA-Zа-яА-Я- ]+$/.test(input.value);
    setIsValidName(validName);
    setName(input.value);
    if (input.value.length === 0) {
      setNameError('Введите имя пользователя');
    } else if (input.value.length < 2) {
      setNameError('Длина имени должна быть не менее 2 символов');
    } else if (input.value.length > 20) {
      setNameError('Длина имени должна быть не более 20 символов');
    } else if (!validName) {
      setNameError('Имя может содержать только буквы, пробел или дефис');
    } else {
      setNameError('');
    }
  }

  function handleEmailChange(e) {
    const input = e.target;
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(
      input.value,
    );
    setIsValidEmail(validEmail);
    setUserEmail(input.value);
    if (input.value.length === 0) {
      setEmailError('Введите email');
    }
    if (!validEmail) {
      setEmailError('Введен некорректный email');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(e) {
    const input = e.target;
    setUserPassword(input.value);
    setIsValidPassword(input.validity.valid);
    if (input.value.length < 8) {
      setPasswordError('Длина пароля должна быть не менее 8 символов');
    }
    if (input.value.length === 0) {
      setPasswordError('Введите пароль');
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
        console.log(`Ошибка ${err}`);
      });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister({
      username: name,
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
                  value={name.value || ''}
                  /* eslint-disable-next-line react/jsx-no-bind */
                  onChange={handleNameChange}
                />

                <Input
                  labelText='E-mail'
                  inputName='email'
                  inputType='email'
                  errorMessage={emailError}
                  isValid={isValidEmail}
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  value={userEmail.value || ''}
                  spanText={emailError}
                  /* eslint-disable-next-line react/jsx-no-bind */
                  onChange={handleEmailChange}
                />

                <PasswordInput
                  spanClass={isValid ? 'input__span' : 'input__error'}
                  spanText={isValid ? 'Не менее 8 символов' : passwordError}
                  errorMessage={passwordError}
                  value={userPassword.value || ''}
                  minLength='8'
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
