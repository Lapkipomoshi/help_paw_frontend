import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import SignUpBlock from '../../components/SignUpBlock/SignUpBlock';
import { EMAIL_REGEX } from '../../utils/regex';
import { EMAIL_INVALID, EMAIL_NOT_FOUND, PASSWORD_NOT_FOUND } from '../../utils/errorMessage';
import { login } from '../../utils/auth';

const LoginPage = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const isValid = isValidEmail && isValidPassword;

  const [disabled, setDisabled] = useState(false);

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
    setIsValidPassword(input.validity.valid);
    setUserPassword(input.value);
    if (input.value.length === 0) {
      setPasswordError(PASSWORD_NOT_FOUND);
    } else {
      setPasswordError('');
    }
  }

  useEffect(() => {
    if (isValid) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValid]);

  function handleLogin({ password, email }) {
    login({ password, email })
      .then((res) => {
        if (res.access) {
          navigate('/profile');
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`Ошибка ${err}`);
      });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin({
      password: userPassword,
      email: userEmail,
    });
  };

  return (
    <main className='main'>
      <section className='login'>
        <UserContainer
          containerClass='login'
        >
          <UserForm
            title='Вход'
            formClass='login'
            onSubmit={handleSubmit}
            formChildren={(
              <>
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

                <Button className='user-form__button-submit_login' submit disabled={disabled}>Войти</Button>

                <div className='login__authorization-container'>
                  <Link className='login__link' to='/password-recovery'>Забыли пароль?</Link>
                  <SignUpBlock className='login' />
                </div>
              </>
            )}
          />
        </UserContainer>
      </section>

    </main>
  );
};

export default LoginPage;
