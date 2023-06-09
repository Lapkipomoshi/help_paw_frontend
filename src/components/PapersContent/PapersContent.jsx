import React from 'react';
import PapersGrid from '../PapersGrid/PapersGrid';

const PapersContent = ({ papersList, isLoading, isError }) => {
  if (isLoading && papersList.length === 0) {
    return <p>Загрузка статей...</p>;
  }

  if (isError || papersList.length === 0) {
    return <p>Упс, произошла ошибка при загрузке статей. Пожалуйста, попробуйте обновить страницу или повторите попытку позже</p>;
  }

  return <PapersGrid papersList={papersList} />;
};

export default PapersContent;
