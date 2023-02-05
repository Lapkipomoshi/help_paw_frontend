import React from 'react';
import './UserForm.css';

function UserForm({
  title, buttonText, onSubmit, formChildren, formClass, buttonContainerClass, buttonClass, buttonChildren,
}) {
  return (
    <div className={`user-form__container user-form__container_${formClass}`}>
      <h2 className='user-form__title'>{title}</h2>

      <form
        className='user-form'
        onSubmit={onSubmit}
        noValidate
      >

        {formChildren}

        <div className={buttonContainerClass}>
          <button
            className={buttonClass}
            type='submit'
          >
            {buttonText}
          </button>

          {buttonChildren}
        </div>

      </form>
    </div>
  );
}

export default UserForm;
