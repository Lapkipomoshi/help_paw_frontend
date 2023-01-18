import React from 'react';
import './RegisterPage.css';
import UserForm from '../../components/UserForm/UserForm';
import {Link} from "react-router-dom";
import UserContainer from "../../components/UserContainer/UserContainer";

const RegisterPage = () => {
    return (
        <main className='main'>
            <section className='register'>
                <UserContainer>
                    <UserForm
                        title='Регистрация'
                        buttonText='Зарегистрироваться'
                    >
                        <label className='user-input__label'>Имя</label>
                        <input
                            className={`user-input`}
                            name='name'
                            type='text'
                            required
                            minLength='2'
                            maxLength='20'
                        />
                        <span className='user-input__error'></span>

                        <label className='user-input__label'>E-mail</label>
                        <input
                            className={`user-input`}
                            name='email'
                            type='email'
                            required
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        />
                        <span className='user-input__error'></span>

                        <label className='user-input__label'>Пароль</label>
                        <div className='user__password'>
                            <input
                                className={`user-input user-input_password`}
                                name='password'
                                type='password'
                                required
                            />
                            <button type='button' className='password-visibility'></button>
                        </div>

                        <span className='user-input__span'>Не менее 8 символов</span>

                        <div className='register__privacy'>
                            <label className='checkbox__container'>
                                <input type='checkbox' className='checkbox__input'/>
                                <span className='checkbox'></span>
                            </label>

                            <p className='register__agreement'>Я согласен с <Link className='register__privacy-link' to='/'>Политикой конфиденциальности</Link> и <Link className='register__privacy-link' to='/'>Условиями использования сервиса</Link></p>
                        </div>

                    </UserForm>
                </UserContainer>
            </section>
        </main>
    );
}

export default RegisterPage;
