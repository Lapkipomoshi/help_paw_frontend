import React from 'react';
import './UserForm.css';
import Button from '../Button/Button';

function UserForm({title, buttonText, onSubmit, formChildren, formClass, buttonContainerClass, buttonClass, buttonChildren}) {
    return (
        <div className={formClass}>
            <h2 className='user-form__title'>{title}</h2>

            <form
                className={`user-form`}
                onSubmit={onSubmit}
                noValidate
            >

                {formChildren}

                <div className={buttonContainerClass}>
                    <Button
                        className={buttonClass}
                        type='submit'
                    >
                        {buttonText}
                    </Button>

                    {buttonChildren}
                </div>

            </form>
        </div>
    );
}

export default UserForm;
