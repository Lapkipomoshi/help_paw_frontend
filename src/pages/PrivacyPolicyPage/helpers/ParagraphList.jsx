import React from 'react';

const ParagraphList = ({ description }) => {
  return description.map((paragraph) => {
    return (
      <p key={paragraph} className='privacy-policy__description-paragraph standard-font_type_small'>
        {paragraph}
      </p>
    );
  });
};

export default ParagraphList;
