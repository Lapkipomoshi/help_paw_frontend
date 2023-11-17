import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterVacancies.scss';
import VacancyList from './VacancyList';
import Button from '../../ui/Button/Button';
import AddVacancyForm from './components/AddVacancyForm/AddVacancyForm';
import shelterVacanciesApi from './api';
import imageSuccess from '../../images/icons/ic_success.svg';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';

const message = 'Вакансия успешно добавлена!';

const ShelterVacancies = () => {
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [vacanciesList, setVacanciesList] = useState([]);
  const [isOpenVacancyForm, setIsOpenVacancyForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { shelter, isOwner } = useOutletContext();

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

  const toggleVacancyForm = () => {
    setIsOpenVacancyForm((prevOpen) => {
      return !prevOpen;
    });
  };

  const cancelVacancyForm = () => {
    setIsOpenVacancyForm((prevOpen) => {
      return !prevOpen;
    });
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
  };

  const handleDeleteVacancy = (id) => {
    const updatedVacancies = vacanciesList.filter((vacancy) => {
      return vacancy.id !== id;
    });
    setVacanciesList(updatedVacancies);
  };

  const handleSubmit = () => {
    setIsOpenVacancyForm(false);
    setInfoTooltipOpen(true);

    shelterVacanciesApi
      .getVacanciesByShelterId(shelter.id)
      .then((res) => {
        setVacanciesList(res);
      })
      .catch((err) => {
        throw new Error(err);
      });

    setTimeout(() => {
      closeInfoTooltip();
    }, 5000);
  };

  if (isLoading) {
    return null;
  }

  return (
    <section className='shelter-vacancies'>
      <div className='shelter-vacancies__title-container'>
        <h2 className='shelter-vacancies__title standard-font standard-font_type_h2'>Вакансии приюта «{shelter.name}»</h2>
        {isOwner && (
          <Button disabled={isOpenVacancyForm} onClick={toggleVacancyForm}>
            Добавить вакансию
          </Button>
        )}
      </div>
      {isOwner && (
        <h3 className='standard-font_type_h3 shelter-section__subtitle'>Всего вакансий: <span className='color-number'>{vacanciesList.length}</span> </h3>
      )}
      <div className='shelter-vacancies__vacancies-container'>
        <VacancyList vacancies={vacanciesList} isLoading={isLoading} onDelete={handleDeleteVacancy} />
        {isOpenVacancyForm && <AddVacancyForm onChange={cancelVacancyForm} onSubmitSuccess={handleSubmit} />}
      </div>
      <InfoTooltip isOpen={infoTooltipOpen} image={imageSuccess} message={message} onClose={closeInfoTooltip} />
    </section>
  );
};

export default ShelterVacancies;