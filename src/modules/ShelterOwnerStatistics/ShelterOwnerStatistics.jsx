import React from 'react';
import './ShelterOwnerStatistics.scss';
import ShelterMetricsOverview from '../../components/ShelterMetricsOverview/ShelterMetricsOverview';

// TODO доделать на получение данных с бэка вместо статики, Максим добавит чуть позже поля в shelter, чтобы не делать доп запросы
// TODO додалеть пути, сейчас эти страницы не сверстаны
const ShelterOwnerStatistics = ({ shelter }) => {
  console.log(shelter);
  return (
    <div className='shelter-owner-statistic'>
      <ShelterMetricsOverview title='Количество питомцев: ' metricValue='123' actionText='Посмотреть всех питомцев' path='/' />
      <ShelterMetricsOverview title='Количество вакансий: ' metricValue='32' actionText='Посмотреть все вакансии' path='/' />
      <ShelterMetricsOverview title='Количество тегов: ' metricValue='1000' actionText='Посмотреть все теги' path='/' />
      <ShelterMetricsOverview title='Количество новостей: ' metricValue='666' actionText='Посмотреть все новостей' path='/' />
    </div>
  );
};

export default ShelterOwnerStatistics;
