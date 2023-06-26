import React, { useState } from 'react';
import './AddPhotoBlock.scss';

const AddPhotoBlock = ({ photo, setPhoto, name, sizeLimit, labelText }) => {
  const [errorText, setErrorText] = useState('');

  const handlePhoto = (e) => {
    const [loadingFile] = e.target.files;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/bmp'];

    if (loadingFile.size > sizeLimit) {
      setErrorText('Изображение больше 5 МБ');
      setPhoto('');
    } else if (!allowedTypes.includes(loadingFile.type)) {
      setErrorText('Неверный тип файла');
      setPhoto('');
    } else {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPhoto(fileReader.result);
      };
      fileReader.readAsDataURL(loadingFile);
      setErrorText('');
    }
  };

  return (
    <div className='add-photo-block'>
      <label className='add-photo-block__label' htmlFor={name}>{labelText}</label>
      <div className='add-photo-block__photo-place'>
        <label>
          <input id={name} onChange={handlePhoto} type='file' name={name} accept='.jpg, .jpeg, .png, .bmp' multiple={false} />
          <img className={`add-photo-block__photo ${!photo && 'add-photo-block__photo_hidden'}`} src={photo} alt='' />
        </label>
      </div>
      <p className='add-photo-block__error'>{errorText}</p>
    </div>
  );
};

export default AddPhotoBlock;
