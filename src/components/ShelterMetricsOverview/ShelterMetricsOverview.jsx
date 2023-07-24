import React from 'react';
import './ShelterMetricsOverview.scss';
import Button from '../../ui/Button/Button';

// scss разнести по папкам
// подключить вывод метрик
// сделать кнопки активными

const ShelterMetricsOverview = ({ title, metricValue, actionText }) => {
  return (
    <div className='shelter-metrics'>
      <h3 className='shelter-metrics__title standard-font_type_h3'>
        {title}
        {metricValue}
      </h3>

      <Button onClick={() => {}}>{actionText}</Button>
    </div>
  );
};

export default ShelterMetricsOverview;
