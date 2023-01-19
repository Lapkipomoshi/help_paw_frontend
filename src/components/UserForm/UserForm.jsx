import React from 'react';
import './UserForm.css';

function UserForm({title, buttonText, onSubmit, children}) {
    return (
        <div className='user-form__container'>
            <h2 className='user-form__title'>{title}</h2>

            <form
                className={`user-form`}
                onSubmit={onSubmit}
                noValidate
            >

                {children}

                <button
                    className={`user-form__button-submit`}
                    type='submit'
                >
                    {buttonText}
                </button>

            </form>
        </div>
    );
}

export default UserForm;
