import React, { useEffect, useState } from 'react';
import './PasswordRecovery.css';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import SignUpBlock from '../../components/SignUpBlock/SignUpBlock';
import MainContainer from '../../components/MainContainer/MainContainer';
import { EMAIL_INVALID, EMAIL_NOT_FOUND } from '../../utils/errorMessage';
import { EMAIL_REGEX } from '../../utils/regex';
import * as auth from '../../utils/auth';

const PasswordRecovery = () => {
  const [disabled, setDisabled] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (isValidEmail) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValidEmail]);

  const handleEmailChange = (evt) => {
    const input = evt.target;
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
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.resetPassword({ email: userEmail })
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('fail');
      });
  };

  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='recovery'>
          <UserContainer
            containerClass='recovery'
          >
            <UserForm
              title='Восстановление пароля'
              formClass='recovery'
              onSubmit={handleSubmit}
              formChildren={(
                <>
                  <Input
                    labelText='E-mail'
                    inputName='email'
                    inputType='email'
                    isValid={isValidEmail}
                    value={userEmail || ''}
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    errorMessage={emailError}
                    spanText={emailError}
                    onChange={handleEmailChange}
                  />

                  <Button className='password-recovery__button' submit disabled={disabled}>Отправить ссылку</Button>

                  <SignUpBlock className='recovery' />
                </>
              )}
            />
          </UserContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default PasswordRecovery;
