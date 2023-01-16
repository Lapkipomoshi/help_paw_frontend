import React from 'react';
import './ShelterVacancies.css';
import VacancyCard from '../VacancyCard/VacancyCard';

const ShelterVacancies = () => {
  return (
    <section className='shelter-section'>
      <h2 className='vacancies-section__title'>Наши вакансии</h2>
      <ul className='vacancies-section__vacancies'>
        <VacancyCard
          title={'Помощник уборщика'}
          salary={'35 000 рублей до НДФЛ'}
          workSchedule={'сменный'}
          charge={'помогать уборщику убирать мусор'} />
        <VacancyCard
          title={'Помощник уборщика'}
          salary={'35 000 рублей до НДФЛ'}
          workSchedule={'сменный'}
          charge={'помогать уборщику убирать мусор'} />
        <VacancyCard
          title={'Помощник уборщика'}
          salary={'35 000 рублей до НДФЛ'}
          workSchedule={'сменный'}
          charge={'помогать уборщику убирать мусор'} />
      </ul>
    </section>
  );
}

export default ShelterVacancies;
