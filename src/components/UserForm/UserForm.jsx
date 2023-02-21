import React from 'react';
import './UserForm.css';

function UserForm({
  title, onSubmit, formChildren, formClass,
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
      </form>
    </div>
  );
}

export default UserForm;
