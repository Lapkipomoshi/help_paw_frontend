import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import SignUpBlock from '../../components/SignUpBlock/SignUpBlock';
import { EMAIL_NOT_FOUND, PASSWORD_NOT_FOUND } from '../../utils/errorMessage';
import MainContainer from '../../components/MainContainer/MainContainer';

const LoginPage = ({ onLogin }) => {
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
    setIsValidEmail(true);
    setUserEmail(input.value);
    if (input.value.length === 0) {
      setEmailError(EMAIL_NOT_FOUND);
      setIsValidEmail(false);
    } else {
      setEmailError('');
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin({
      password: userPassword,
      email: userEmail,
    });
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <MainContainer theme='base'>
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
    </MainContainer>
  );
};

export default LoginPage;
