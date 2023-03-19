import React from 'react';
import './UserForm.css';

function UserForm({
  title, onSubmit, formChildren, formClass, modifier,
}) {
  return (
    <div className={`user-form__container user-form__container_${formClass}`}>
      <h2 className={`user-form__title user-form__title_${modifier}`}>{title}</h2>

      <form
        className={`user-form user-form_${formClass}`}
        onSubmit={onSubmit}
        noValidate
      >
        {formChildren}
      </form>
    </div>
  );
}

export default UserForm;
