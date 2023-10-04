import React from 'react';
import './EscapeIcon.scss';

const EscapeIcon = ({ onClick }) => {
  return (
    <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none' onClick={onClick}>
      <path
        d={
          'M7.76562 4.84358L16.0003 13.0782L24.1923 4.88624C24.3732 4.69364 24.5912 4.53957 ' +
          '24.8332 4.43326C25.0751 4.32695 25.336 4.2706 25.6003 4.26758C26.1661 4.26758 26.7087 ' +
          '4.49234 27.1088 4.89242C27.5089 5.29249 27.7336 5.83512 27.7336 6.40091C27.7386 6.66246 ' +
          '27.6901 6.92227 27.591 7.16439C27.492 7.40651 27.3445 7.62584 27.1576 7.80891L18.8589 ' +
          '16.0009L27.1576 24.2996C27.5092 24.6436 27.7154 25.1094 27.7336 25.6009C27.7336 26.1667 ' +
          '27.5089 26.7093 27.1088 27.1094C26.7087 27.5095 26.1661 27.7342 25.6003 27.7342C25.3284 ' +
          '27.7455 25.0571 27.7001 24.8037 27.601C24.5503 27.5018 24.3203 27.3511 24.1283 27.1582' +
          'L16.0003 18.9236L7.78695 27.1369C7.60669 27.3231 7.39135 27.4717 7.15335 27.5743C6.91535 ' +
          '27.6768 6.65941 27.7312 6.40028 27.7342C5.83449 27.7342 5.29186 27.5095 4.89179 27.1094' +
          'C4.49171 26.7093 4.26695 26.1667 4.26695 25.6009C4.26197 25.3394 4.3105 25.0796 4.40955 ' +
          '24.8374C4.5086 24.5953 4.65608 24.376 4.84295 24.1929L13.1416 16.0009L4.84295 7.70224C4.49134 ' +
          '7.35826 4.28517 6.89246 4.26695 6.40091C4.26695 5.83512 4.49171 5.29249 4.89179 4.89242C5.29186 ' +
          '4.49234 5.83449 4.26758 6.40028 4.26758C6.91228 4.27398 7.40295 4.48091 7.76562 4.84358Z'
        }
        fill='#111C2C'
      />
    </svg>
  );
};

export default EscapeIcon;
