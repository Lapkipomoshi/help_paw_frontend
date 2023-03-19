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
  const [isSameName, setIsSameName] = useState(false);
  const [isSameEmail, setIsSameEmail] = useState(false);
  const isValid = isValidName && isValidEmail;
  const isSame = isSameName && isSameEmail;

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
      if (!validName) {
        setNameError(NAME_INVALID);
      } else if (input.value.length === 0) {
        setNameError(NAME_NOT_FOUND);
        setIsValidName(false);
      } else if (input.value.length < 2) {
        setNameError(NAME_TOO_SHORT);
        setIsValidName(false);
      } else if (input.value.length > 20) {
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
      if (!validEmail) {
        setEmailError(EMAIL_INVALID);
      } else if (input.value === email) {
        setIsSameEmail(true);
      } else {
        setEmailError('');
      }
      if (input.value.length === 0) {
        setEmailError(EMAIL_NOT_FOUND);
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
                  <UserLink modifier='change-password' linkAddress='/profile/edit/password' linkText='Изменить пароль' />
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
                    onChange={handleChange}
                  />

                  <div className='edit-profile__buttons'>
                    <Button className='' submit disabled={disabled || isSame}>Сохранить изменения</Button>
                    <SecondaryButton className='' onClick={cancelEdit}>Отменить</SecondaryButton>
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
