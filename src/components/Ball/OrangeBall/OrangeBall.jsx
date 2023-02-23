import React from 'react';
import './OrangeBall.css';

function OrangeBall({ modifier }) {
  return (
    <div className={`orange-ball orange-ball_${modifier}`} />
  );
}

export default OrangeBall;
