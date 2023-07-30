import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChangePasswordPage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import UserForm from '../../components/UserForm/UserForm';
import UserLink from '../../ui/UserLink/UserLink';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import * as auth from '../App/api/auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const { email } = currentUser;
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(null);
  const [message, setMessage] = useState('');

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
    setInfoTooltipImage(null);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.resetPassword({ email })
      .then(() => {
        setInfoTooltipImage(imageSuccess);
        setMessage('Ссылка для сброса пароля отправлена на вашу почту!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 15000);
        setTimeout(() => { navigate('/'); }, 15000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 15000);
      });
  };

  return (
    <MainContainer>
      <main className='main'>
        <section className='change-password'>
          <ProfileContainer containerClass='change-password'>
            <UserLink modifier='return' linkAddress='/profile' linkText='Назад в личный кабинет' />
            <UserForm
              title='Изменить пароль'
              formClass='change-password'
              onSubmit={handleSubmit}
              modifier='change-password'
              formChildren={(
                <>
                  <p className='change-password__text'>Вы уверены, что хотите изменить пароль?</p>
                  <p className='change-password__text'>После нажатия на кнопку, на вашу почту придет письмо со ссылкой для сброса пароля</p>
                  <Button submit>Сбросить пароль</Button>
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
  );
};

export default ChangePasswordPage;
