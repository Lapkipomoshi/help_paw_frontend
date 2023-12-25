import React, { useState } from 'react';
import Question from '../../modules/NestedRoutesMenu/svg/Question';
import Tooltip from '../Tooltip/Tooltip';
import './AddPhotoBlock.scss';

const AddPhotoBlock = ({ photo, setPhoto, name, sizeLimit, labelText }) => {
  const [errorText, setErrorText] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

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
      <label className='add-photo-block__label' htmlFor={name}>
        {labelText}
        <div
          className='add-photo-block__label-tooltip'
          onMouseEnter={() => {setShowTooltip(true); }}
          onMouseLeave={() => {setShowTooltip(false); }}
        >
          <Question className='add-photo-block__label-tooltip-svg' />
          {showTooltip && (
            <Tooltip className='tooltip-content'>
              <div>Размер: до 5 Мб</div>
              <div>Форматы: jpg, jpeg, png, bmp.</div>
            </Tooltip>
          )}
        </div>
      </label>
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
