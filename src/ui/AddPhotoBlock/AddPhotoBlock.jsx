import React from 'react';
import './AddPhotoBlock.scss';

const AddPhotoBlock = ({ photo, setPhoto, sizeLimit, lagelText }) => {
  const handlePhoto = (e) => {
    if (e.target.files[0].size < sizeLimit) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPhoto(fileReader.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      setPhoto('');
    }
  };

  return (
    <div className='add-photo-block'>
      <label className='add-photo-block__label'>{lagelText}</label>
      <div className='add-photo-block__photo-place'>
        <label>
          <input onChange={handlePhoto} type='file' accept='.jpg, .jpeg, .png, .bmp' multiple={false} />
          <img className={`add-photo-block__photo ${!photo && 'add-photo-block__photo_hidden'}`} src={photo} alt='' />
        </label>
      </div>
    </div>
  );
};

export default AddPhotoBlock;
