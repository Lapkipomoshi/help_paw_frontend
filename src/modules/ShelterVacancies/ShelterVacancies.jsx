import React from 'react';
import './ShelterVacancies.scss';
import VacancyCard from '../../components/VacancyCard/VacancyCard';

const ShelterVacancies = () => {
  const [vacanciesList, setVacanciesList] = React.useState([]); // список вакансий

  React.useEffect(() => {
    setVacanciesList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        title: 'Помощник уборщика',
        salary: '35 000 рублей до НДФЛ',
        workSchedule: 'сменный',
        charge: 'помогать уборщику убирать мусор',
      },
      {
        id: 2,
        title: 'Помощник уборщика',
        salary: '35 000 рублей до НДФЛ',
        workSchedule: 'сменный',
        charge: 'помогать уборщику убирать мусор',
      },
      {
        id: 3,
        title: 'Помощник уборщика',
        salary: '35 000 рублей до НДФЛ',
        workSchedule: 'сменный',
        charge: 'помогать уборщику убирать мусор',
      },
    ]);
  }, []);

  return (
    <section className='shelter-section shelter-vacancies'>
      <h2 className='shelter-section__title'>Наши вакансии</h2>
      <ul className='vacancies-list'>
        {(vacanciesList && vacanciesList.length !== 0)
          ? vacanciesList.map((card) => {
            return (
              <VacancyCard
                id={card.id}
                title={card.title}
                salary={card.salary}
                workSchedule={card.workSchedule}
                charge={card.charge}
              />
            );
          })
          : <p>У приюта нет активных вакансий</p>}
      </ul>
    </section>
  );
};

export default ShelterVacancies;
