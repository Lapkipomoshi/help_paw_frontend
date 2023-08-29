import React from 'react';
import './ShelterMetricsOverview.scss';
import Button from '../../ui/Button/Button';

const ShelterMetricsOverview = ({ title, metricValue, actionText, path }) => {
  return (
    <div className='shelter-metrics'>
      <h3 className='shelter-metrics__title standard-font_type_h3'>
        {title}
        <span className='shelter-metrics__metrics-donation-sum'> {metricValue}</span>
      </h3>

      <Button link to={path}>
        {actionText}
      </Button>
    </div>
  );
};

export default ShelterMetricsOverview;
