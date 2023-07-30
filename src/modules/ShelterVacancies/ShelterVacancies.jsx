import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterVacancies.scss';
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import Button from '../../ui/Button/Button';
import shelterVacanciesApi from './api';

const ShelterVacancies = () => {
  const [vacanciesList, setVacanciesList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { shelter, id } = useOutletContext();

  useEffect(() => {
    if (!id) return;
    shelterVacanciesApi
      .getVacanciesByShelterId(id)
      .then((res) => {
        setVacanciesList(res);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return (
    <section className='shelter-vacancies'>
      <div className='shelter-vacancies__title-container'>
        <h2 className='shelter-vacancies__title standard-font standard-font_type_h2'>Вакансии приюта «{shelter.name}»</h2>
        <Button>Добавить вакансию</Button>
      </div>
      <h3 className='standard-font_type_h3 shelter-section__subtitle'>Всего вакансий: {vacanciesList.length}</h3>
      <ul className='vacancies-list'>
        {vacanciesList.length !== 0 ? (
          vacanciesList.map((card) => {
            return (
              <VacancyCard
                isLoading={isLoading}
                key={card.id}
                id={card.id}
                education={card.education}
                title={card.position}
                salary={card.salary}
                schedule={card.schedule}
                description={card.description}
              />
            );
          })
        ) : (
          <p>У приюта нет активных вакансий</p>
        )}
      </ul>
    </section>
  );
};

export default ShelterVacancies;
