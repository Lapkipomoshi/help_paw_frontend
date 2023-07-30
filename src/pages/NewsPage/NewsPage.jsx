import React from 'react';
import './NewsPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import NewsSection from '../../modules/NewsSection/NewsSection';
import Button from '../../ui/Button/Button';

const NewsPage = () => {

  return (
    <MainContainer>
      <main className='main news'>
        <div className='news__title-row'>
          <h2 className='news__title'>Новости</h2>
          <Button className='margin-left_auto' onClick={() => {}} disabled>Предложить новость</Button>
        </div>
        <NewsSection />
      </main>
    </MainContainer>
  );
};

export default NewsPage;
