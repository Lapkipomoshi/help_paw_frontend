import React from 'react';
import './PrivacyPolicyPage.scss';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import MainContainer from '../../components/MainContainer/MainContainer';
import dataPrivacyPolicy from './constants';

const PrivacyPolicyPage = () => {
  const privacyPolicyLength = dataPrivacyPolicy.length;

  return (
    <MainContainer base='additional'>
      <section className='privacy-policy__container'>
        <h2 className='standard-font_type_h3 privacy-policy__headline'>Политика в отношении обработки персональных данных</h2>

        {dataPrivacyPolicy.map((privacyItem, index) => {
          const isLastItem = index === privacyPolicyLength - 1; // выявляем последний DetailsCard

          // деструктурируем объект в rendererComponent, чтобы jsx мог отрисовать компонент
          const { rendererComponent: Component, description } = privacyItem;
          return (
            <DetailsCard
              key={privacyItem.id}
              title={privacyItem.title}
              isOpen={false}
              iconType='arrow'
              titleClasses='standard-font_type_h4'
              containerClasses={`${isLastItem ? '' : 'details-card__not-last'}`}
            >
              <div className='privacy-policy__description-section'>{Component && <Component description={description} />}</div>
            </DetailsCard>
          );
        })}
      </section>
    </MainContainer>
  );
};

export default PrivacyPolicyPage;
