import React from 'react';
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import './ShelterVacancies.scss';

const VacancyList = ({ vacancies, isLoading, onDelete  }) => {
  if (!vacancies.length) {
    return <p className='standard-font shelter__empty-list'>У приюта нет активных вакансий</p>;
  }

  return (
    <ul className='shelter__vacancies-list'>
      {vacancies.map((card) => {
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
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default VacancyList;
