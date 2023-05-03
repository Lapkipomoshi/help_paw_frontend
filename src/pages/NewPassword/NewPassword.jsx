import React, { useEffect, useState } from 'react';
import './NewPassword.css';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import MainContainer from '../../components/MainContainer/MainContainer';
import { NUMBER, PASSWORD_REGEX } from '../../utils/regex';
import {
  PASSWORD_INVALID, PASSWORD_NOT_FOUND, PASSWORD_ONLY_NUMBERS, PASSWORD_TOO_LONG, PASSWORD_TOO_SHORT,
} from '../../utils/errorMessage';
import * as auth from '../../utils/auth';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';

const NewPassword = () => {
  const [userPassword, setUserPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [promptText, setPromptText] = useState('Не менее 10 символов');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { uid, token } = useParams();

  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(imageSuccess);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const input = e.target;
    const validPassword = PASSWORD_REGEX.test(input.value);
    const passwordOnlyNumbers = NUMBER.test(input.value);
    setIsValidPassword(input.validity.valid);
    setUserPassword(input.value);
    if (input.value.length === 0) {
      setPasswordError(PASSWORD_NOT_FOUND);
    } else
    if (!validPassword) {
      setPasswordError(PASSWORD_INVALID);
    } else if (input.value.length < 10) {
      setPasswordError(PASSWORD_TOO_SHORT);
    } else if (input.value.length > 100) {
      setPasswordError(PASSWORD_TOO_LONG);
    } else if (passwordOnlyNumbers) {
      setPasswordError(PASSWORD_ONLY_NUMBERS);
    } else {
      setPasswordError('');
      setPromptText('');
    }
  };

  useEffect(() => {
    if (isValidPassword) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValidPassword]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.resetPasswordConfirm({
      uid,
      token,
      new_password: userPassword,
    })
      .then(() => {
        setInfoTooltipImage(imageSuccess);
        setMessage('Пароль успешно изменен!');
        setInfoTooltipOpen(true);
        setTimeout(() => {
          setInfoTooltipOpen(false);
        }, 2000);
        setTimeout(() => { navigate('/sign-in'); }, 2000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipOpen(true);
        setTimeout(() => {
          setInfoTooltipOpen(false);
        }, 2000);
      });
  };

  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='new-password'>
          <UserForm
            title='Новый пароль'
            formClass='recovery'
            onSubmit={handleSubmit}
            formChildren={(
              <>
                <PasswordInput
                  spanText={passwordError}
                  errorMessage={passwordError}
                  spanPrompt={promptText}
                  value={userPassword || ''}
                  pattern='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$'
                  minLength='10'
                  maxLength='101'
                  isValid={isValidPassword}
                  onChange={handlePasswordChange}
                />

                <Button className='new-password__button' submit disabled={disabled}>Сменить пароль</Button>
              </>
            )}
          />
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

export default NewPassword;
