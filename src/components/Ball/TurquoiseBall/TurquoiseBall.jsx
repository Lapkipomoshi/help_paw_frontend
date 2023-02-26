import React from 'react';
import './TurquoiseBall.css';

function TurquoiseBall({ modifier }) {
  return (
    <div className={`turquoise-ball turquoise-ball_${modifier}`} />
  );
}

export default TurquoiseBall;
