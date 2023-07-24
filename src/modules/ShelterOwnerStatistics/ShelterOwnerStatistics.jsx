import React from 'react';
import './ShelterOwnerStatistics.scss';
import ShelterMetricsOverview from '../../components/ShelterMetricsOverview/ShelterMetricsOverview';

// scss разнести по папкам
// подключить вывод метрик
const ShelterOwnerStatistics = () => {
  return (
    <div className='shelter-owner-statistic'>
      <ShelterMetricsOverview title='Количество питомцев: ' metricValue='123' actionText='Посмотреть всех питомцев' />
      <ShelterMetricsOverview title='Количество вакансий: ' metricValue='32' actionText='Посмотреть все вакансии' />
      <ShelterMetricsOverview title='Количество тегов: ' metricValue='1000' actionText='Посмотреть все теги' />
      <ShelterMetricsOverview title='Количество новостей: ' metricValue='666' actionText='Посмотреть все новостей' />
    </div>
  );
};

export default ShelterOwnerStatistics;
