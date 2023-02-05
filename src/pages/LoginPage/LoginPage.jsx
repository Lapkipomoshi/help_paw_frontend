import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import SignUpBlock from '../../components/SignUpBlock/SignUpBlock';

const LoginPage = () => {
  return (
    <main className='main'>
      <section className='login'>
        <UserContainer
          containerClass='login'
        >
          <UserForm
            title='Вход'
            formClass='login'
            formChildren={(
              <>
                <Input
                  labelText='E-mail'
                  inputName='email'
                  inputType='email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />

                <PasswordInput
                  spanClass='input__error'
                  spanText=''
                />

                <Button className='user-form__button-submit_login' submit disabled>Войти</Button>

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
  );
};

export default LoginPage;
