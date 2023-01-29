import React from 'react';
import './ShelterVacancies.css';
import VacancyCard from '../../components/VacancyCard/VacancyCard';

const ShelterVacancies = () => {
  return (
    <section className='shelter-section shelter-vacancies'>
      <h2 className='shelter-section__title'>Наши вакансии</h2>
      <ul className='vacancies-list'>
        <VacancyCard
          title='Помощник уборщика'
          salary='35 000 рублей до НДФЛ'
          workSchedule='сменный'
          charge='помогать уборщику убирать мусор'
        />
        <VacancyCard
          title='Помощник уборщика'
          salary='35 000 рублей до НДФЛ'
          workSchedule='сменный'
          charge='помогать уборщику убирать мусор'
        />
        <VacancyCard
          title='Помощник уборщика'
          salary='35 000 рублей до НДФЛ'
          workSchedule='сменный'
          charge='помогать уборщику убирать мусор'
        />
      </ul>
    </section>
  );
};

export default ShelterVacancies;
