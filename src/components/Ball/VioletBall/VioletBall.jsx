import React from 'react';
import './VioletBall.scss';

function VioletBall({ modifier }) {
  return (
    <div className={`violet-ball violet-ball_${modifier}`} />
  );
}

export default VioletBall;
