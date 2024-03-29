import React from 'react';
import './UserForm.scss';

function UserForm({
  title, onSubmit, formChildren, formClass, modifier,
}) {
  return (
    <div className={`user-form__container user-form__container_${formClass}`}>
      <h2 className={`user-form__title standard-font standard-font_type_h2 user-form__title_${modifier}`}>{title}</h2>

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
