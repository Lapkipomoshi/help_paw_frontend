import React from 'react';
import './SignOutPage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import UserForm from '../../components/UserForm/UserForm';
import UserLink from '../../ui/UserLink/UserLink';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';

const SignOutPage = ({ onSignOut }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignOut();
  };

  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='sign-out'>
          <ProfileContainer containerClass='sign-out'>
            <UserLink modifier='return' linkAddress='/profile' linkText='Назад в личный кабинет' />
            <UserForm
              title='Выйти из профиля'
              formClass='sign-out'
              onSubmit={handleSubmit}
              modifier='sign-out'
              formChildren={(
                <>
                  <p className='sign-out__text'>Вы уверены, что хотите выйти из профиля?</p>

                  <div className='sign-out__buttons'>
                    <Button className='' submit>Да, выйти</Button>
                    <SecondaryButton className='' link to='/profile'>Нет, в личный кабинет</SecondaryButton>
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

export default SignOutPage;
