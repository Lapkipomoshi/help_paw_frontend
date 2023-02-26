import React from 'react';
import './PasswordRecovery.css';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import SignUpBlock from '../../components/SignUpBlock/SignUpBlock';
import MainContainer from '../../components/MainContainer/MainContainer';

const PasswordRecovery = () => {
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
              formChildren={(
                <>
                  <Input
                    labelText='E-mail'
                    inputName='email'
                    inputType='email'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  />

                  <Button className='password-recovery__button' submit disabled>Отправить ссылку</Button>

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
