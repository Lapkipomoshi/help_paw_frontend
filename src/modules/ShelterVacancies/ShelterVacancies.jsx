import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterVacancies.scss';
import VacancyList from './VacancyList';
import Button from '../../ui/Button/Button';
import AddVacancyForm from './AddVacancyForm/AddVacancyForm';
import shelterVacanciesApi from './api';

const ShelterVacancies = () => {
  const [vacanciesList, setVacanciesList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { shelter } = useOutletContext();

  useEffect(() => {
    if (!shelter.id) return;
    shelterVacanciesApi
      .getVacanciesByShelterId(shelter.id)
      .then((res) => {
        setVacanciesList(res);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [shelter.id]);

  if (isLoading) {
    return null;
  }

  return (
    <section className='shelter-vacancies'>
      <div className='shelter-vacancies__title-container'>
        <h2 className='shelter-vacancies__title standard-font standard-font_type_h2'>Вакансии приюта «{shelter.name}»</h2>

        {/* TODO добавить логику disabled кнопки */}
        <Button>Добавить вакансию</Button>
      </div>
      <h3 className='standard-font_type_h3 shelter-section__subtitle'>Всего вакансий: {vacanciesList.length}</h3>
      <div className='shelter-vacancies__vacancies-container'>
        <VacancyList vacancies={vacanciesList} isLoading={isLoading} />
        <AddVacancyForm />
      </div>
    </section>
  );
};

export default ShelterVacancies;
