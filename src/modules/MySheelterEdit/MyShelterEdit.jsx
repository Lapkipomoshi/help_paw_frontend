import React from 'react';
import './MyShelterEdit.scss';

const contentText = {
  PAGE_TITLE: 'Вернуться назад',
};

const MyShelterEdit = () => {

  return (
    <section className='my-shelter-edit-section'>
      <h2 className='my-shelter-edit-section__title'>{contentText.PAGE_TITLE}</h2>
    </section>
  );
};

export default MyShelterEdit;