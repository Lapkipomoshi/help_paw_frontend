import React from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import UserContainer from '../../components/UserContainer/UserContainer';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';

const RegisterPage = () => {
  return (
    <main className='main'>
      <section className='register'>
        <UserContainer
          containerClass='register'
        >
          <UserForm
            title='Регистрация'
            formClass='register'
            formChildren={(
              <>
                <Input
                  labelText='Имя'
                  inputName='name'
                  inputType='text'
                />

                <Input
                  labelText='E-mail'
                  inputName='email'
                  inputType='email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />

                <PasswordInput
                  spanClass='input__span'
                  spanText='Не менее 8 символов'
                />

                <div className='register__privacy'>
                  <label className='checkbox__container'>
                    <input type='checkbox' className='checkbox__input' />
                    <span className='checkbox' />
                  </label>

                  <p className='register__agreement'>
                    Я согласен с
                    <Link className='register__privacy-link' to='/' target='_blank'> Политикой конфиденциальности</Link>
                    {' '}
                    и
                    <Link className='register__privacy-link' to='/' target='_blank'> Условиями использования сервиса</Link>
                  </p>
                </div>

                <Button className='user-form__button-submit_register' submit disabled>Зарегистрироваться</Button>
              </>
            )}
          />
        </UserContainer>
      </section>
    </main>
  );
};

export default RegisterPage;
