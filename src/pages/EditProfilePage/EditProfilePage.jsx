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
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';

const EditProfilePage = ({ onEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);
  const { username, email } = currentUser;
  const [userName, setUserName] = useState(username);
  const [userEmail, setUserEmail] = useState(email);
  const [disabled, setDisabled] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSameValue, setIsSameValue] = useState(false);
  const isValid = isValidName && isValidEmail;

  useEffect(() => {
    if (isValid) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [isValid]);

  useEffect(() => {
    if (
      username === userName
      && email === userEmail
    ) {
      setDisabled(true);
    } else if (isValid) {
      setDisabled(false);
    } else if (!isValid) {
      setDisabled(true);
    }
  }, [username, email, isValid]);

  useEffect(() => {
    setUserName(username);
    setUserEmail(email);
  }, [username, email]);

  function handleChange(e) {
    const input = e.target;

    if (input.name === 'name') {
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

    if (input.name === 'email') {
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

    if (input.value === userName
      && input.value === userEmail) {
      setIsSameValue(true);
    } else {
      setIsSameValue(false);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onEditProfile({ userName, userEmail });
  };

  return (
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
                  <UserLink modifier='change-password' linkAddress='/' linkText='Изменить пароль' />
                  <Input
                    labelText='Имя'
                    inputName='name'
                    inputType='text'
                    errorMessage={nameError}
                    spanText={nameError}
                    minLength='2'
                    maxLength='20'
                    pattern='[A-Za-zа-яА-ЯёЁ\d-\s]*$'
                    value={userName || ''}
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onChange={handleChange}
                  />

                  <Input
                    labelText='E-mail'
                    inputName='email'
                    inputType='email'
                    errorMessage={emailError}
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$'
                    value={userEmail || ''}
                    spanText={emailError}
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onChange={handleChange}
                  />

                  <div className='edit-profile__buttons'>
                    <Button className='' submit disabled={isSameValue || disabled}>Сохранить изменения</Button>
                    <SecondaryButton className='' disabled={disabled}>Отменить</SecondaryButton>
                  </div>
                </>
              )}
            />
          </ProfileContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default EditProfilePage;
