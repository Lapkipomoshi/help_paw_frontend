import React from 'react';
import './TurquoiseBall.scss';

function TurquoiseBall({ modifier }) {
  return (
    <div className={`turquoise-ball turquoise-ball_${modifier}`} />
  );
}

export default TurquoiseBall;
