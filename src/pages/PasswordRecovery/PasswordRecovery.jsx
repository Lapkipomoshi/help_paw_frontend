import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordRecovery.css';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import SignUpBlock from '../../components/SignUpBlock/SignUpBlock';
import MainContainer from '../../components/MainContainer/MainContainer';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import { EMAIL_INVALID, EMAIL_NOT_FOUND } from '../../utils/errorMessage';
import { EMAIL_REGEX } from '../../utils/regex';
import * as auth from '../App/api/auth';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(null);
  const [message, setMessage] = useState('');

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
    if (input.value.length === 0) {
      setEmailError(EMAIL_NOT_FOUND);
    } else if (!validEmail) {
      setEmailError(EMAIL_INVALID);
    } else {
      setEmailError('');
    }
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
    setInfoTooltipImage(null);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.resetPassword({ email: userEmail })
      .then(() => {
        setInfoTooltipImage(imageSuccess);
        setMessage('Ссылка для восстановления пароля отправлена на указанную почту!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
        setTimeout(() => { navigate('/'); }, 2000);
      })
      .catch((res) => {
        setInfoTooltipImage(imageError);
        if (res.status === 400) {
          setMessage('Пользователь с таким e-mail не зарегистрирован.');
        } else {
          setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        }
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      });
  };

  return (
    <MainContainer>
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
      <InfoTooltip
        isOpen={infoTooltipOpen}
        image={infoTooltipImage}
        message={message}
      />
    </MainContainer>
  );
};

export default PasswordRecovery;
