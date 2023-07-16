import React, { useContext, useEffect, useState } from 'react';
import './EditProfilePage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import UserForm from '../../components/UserForm/UserForm';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/regex';
import {
  EMAIL_INVALID, EMAIL_NOT_FOUND, NAME_INVALID, NAME_NOT_FOUND, NAME_TOO_LONG, NAME_TOO_SHORT,
} from '../../utils/errorMessage';
import UserLink from '../../ui/UserLink/UserLink';
import { resetEmail, updateUserInfo } from './api';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';

const EditProfilePage = ({ onUpdateCurrentUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const { username, email } = currentUser;
  const [userName, setUserName] = useState(username);
  const [userEmail, setUserEmail] = useState(email);
  const [disabled, setDisabled] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSameName, setIsSameName] = useState(false);
  const [isSameEmail, setIsSameEmail] = useState(false);
  const isValid = isValidName && isValidEmail;
  const isSame = isSameName && isSameEmail;
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setUserName(username);
    setUserEmail(email);

    if (userName === username && userEmail === email) {
      setIsSameName(true);
      setIsSameEmail(true);
      setIsValidName(true);
      setIsValidEmail(true);
    }
  }, [username, email]);

  const handleChange = (e) => {
    const input = e.target;

    if (input.name === 'name') {
      const validName = NAME_REGEX.test(input.value);
      setIsValidName(validName);
      setUserName(input.value);
      setIsSameName(false);
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
      } else if (input.value === username) {
        setIsSameName(true);
      } else {
        setNameError('');
      }
      if (isValidName && isSameEmail) {
        setDisabled(false);
      }
    }

    if (input.name === 'email') {
      const validEmail = EMAIL_REGEX.test(input.value);
      setIsValidEmail(validEmail);
      setUserEmail(input.value);
      setIsSameEmail(false);
      if (input.value.length === 0) {
        setEmailError(EMAIL_NOT_FOUND);
      } else if (!validEmail) {
        setEmailError(EMAIL_INVALID);
      } else if (input.value === email) {
        setIsSameEmail(true);
      } else {
        setEmailError('');
      }
      if (isValidEmail && isSameName) {
        setDisabled(false);
      }
    }
  };

  const cancelEdit = () => {
    setUserName(username);
    setUserEmail(email);
    setIsSameName(true);
    setIsSameEmail(true);
    setNameError('');
    setEmailError('');
  };

  const handleDisableButton = () => {
    if (isValid) {
      return setDisabled(false);
    }
    return setDisabled(true);
  };

  useEffect(() => {
    handleDisableButton();
  }, [isValid]);

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
    setInfoTooltipImage(null);
  };

  // eslint-disable-next-line no-shadow
  const handleUpdateUser = ({ username, email }) => {
    if (isSameName && !isSameEmail) {
      resetEmail({ email })
        .then(() => {
          setInfoTooltipImage(imageSuccess);
          setMessage('Письмо для активации нового email отправлено.');
          setInfoTooltipOpen(true);
          setTimeout(closeInfoTooltip, 15000);
        })
        .catch(() => {
          setInfoTooltipImage(imageError);
          setMessage('Что-то пошло не так! Попробуйте ещё раз.');
          setInfoTooltipOpen(true);
          setTimeout(closeInfoTooltip, 15000);
        });
    }

    if (isSameEmail && !isSameName) {
      updateUserInfo({ username })
        .then(() => {
          onUpdateCurrentUser({ username, email });
          setInfoTooltipImage(imageSuccess);
          setMessage('Вы успешно изменили данные!');
          setInfoTooltipOpen(true);
          setTimeout(closeInfoTooltip, 15000);
        })
        .catch(() => {
          setInfoTooltipImage(imageError);
          setMessage('Что-то пошло не так! Попробуйте ещё раз.');
          setInfoTooltipOpen(true);
          setTimeout(closeInfoTooltip, 15000);
        });
    }

    if (!isSameName && !isSameEmail) {
      Promise.all([updateUserInfo({ username }), resetEmail({ email })])
        .then(() => {
          onUpdateCurrentUser({ username, email });
          setInfoTooltipImage(imageSuccess);
          setMessage('Вы успешно изменили данные! Письмо для активации нового email отправлено.');
          setInfoTooltipOpen(true);
          setTimeout(closeInfoTooltip, 15000);
        })
        .catch(() => {
          setInfoTooltipImage(imageError);
          setMessage('Что-то пошло не так! Попробуйте ещё раз.');
          setInfoTooltipOpen(true);
          setTimeout(closeInfoTooltip, 15000);
        });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser({ username: userName, email: userEmail });
    setDisabled(true);
    setUserEmail(email);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MainContainer theme='base'>
        <main className='main'>
          <section className='edit-profile'>
            <ProfileContainer containerClass='edit-profile'>
              <UserLink modifier='return' linkAddress='/profile' linkText='Назад в личный кабинет' />
              <UserForm
                title='Редактировать профиль'
                formClass='profile'
                onSubmit={handleSubmit}
                modifier='edit-profile'
                formChildren={(
                  <>
                    <UserLink modifier='change-password' linkAddress='/profile/edit/password' linkText='Изменить пароль' />
                    <Input
                      labelText='Имя'
                      inputName='name'
                      inputType='text'
                      errorMessage={nameError}
                      spanText={nameError}
                      minLength='2'
                      maxLength='50'
                      value={userName || ''}
                      onChange={handleChange}
                    />

                    <Input
                      labelText='E-mail'
                      inputName='email'
                      inputType='email'
                      errorMessage={emailError}
                      spanText={emailError}
                      value={userEmail || ''}
                      onChange={handleChange}
                    />

                    <div className='edit-profile__buttons'>
                      <Button submit disabled={disabled || isSame}>Сохранить изменения</Button>
                      <Button theme='transparent' onClick={cancelEdit} disabled={isSame}>Отменить</Button>
                    </div>
                  </>
                )}
              />
            </ProfileContainer>
          </section>
        </main>
        <InfoTooltip
          isOpen={infoTooltipOpen}
          image={infoTooltipImage}
          message={message}
          onClose={closeInfoTooltip}
        />
      </MainContainer>
    </CurrentUserContext.Provider>
  );
};

export default EditProfilePage;
