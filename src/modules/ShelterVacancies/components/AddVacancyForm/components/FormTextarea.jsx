import React, { useEffect } from 'react';

const FormTextarea = ({ jobDescriptionInput, handleDescriptionChange, initialValues }) => {
  useEffect(() => {
    if (initialValues) {
      jobDescriptionInput.onChange({ target: { value: initialValues } });
    }
  }, [initialValues]);
  return (
    <>
      <p className='vacancy-form__desctioption-title'>Обязанности*</p>
      <textarea
        className={`vacancy-form__description ${jobDescriptionInput.dirty && jobDescriptionInput.invalidText && 'add-vacancy-form__textarea_invalid'}`}
        value={jobDescriptionInput.value}
        onChange={handleDescriptionChange}
        onBlur={jobDescriptionInput.onBlur}
        name='description'
        required
      />
      <p className='add-shelter-form__error'>{jobDescriptionInput.dirty && jobDescriptionInput.invalidText}</p>
    </>
  );
};

export default FormTextarea;
