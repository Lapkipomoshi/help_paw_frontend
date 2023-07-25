import React from 'react';
import './ShelterMetricsOverview.scss';
import Button from '../../ui/Button/Button';

// TODO scss разнести по папкам

const ShelterMetricsOverview = ({ title, metricValue, actionText, path }) => {
  return (
    <div className='shelter-metrics'>
      <h3 className='shelter-metrics__title standard-font_type_h3'>
        {title}
        {metricValue}
      </h3>

      <Button link to={path}>
        {actionText}
      </Button>
    </div>
  );
};

export default ShelterMetricsOverview;
