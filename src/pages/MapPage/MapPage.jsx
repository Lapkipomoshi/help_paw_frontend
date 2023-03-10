import React from 'react';
import { Link } from 'react-router-dom';
import './MapPage.css';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import MainContainer from '../../components/MainContainer/MainContainer';
import pawIcon from '../../images/icons/ic_paw.svg';
import websiteIcon from '../../images/icons/ic_website.svg';
import SearchInput from '../../components/SearchInput/SearchInput';

const MapPage = () => {
  return (
    <MainContainer theme='base'>
      <main>
        <section className='search-section'>
          <SearchInput />
          <Link className='search-section__link' to='/shelters/list'>Показать приюты списком</Link>
        </section>
        <section className='section section_with-background'>
          <YMaps>
            <div className='container container_flex-row section__content'>
              <Map
                style={{ position: 'relative', width: '100%', height: 914 }}
                defaultState={{ center: [55.75, 37.57], zoom: 9, controls: [] }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              >
                <ul className='shelters-list'>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='сайт' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                  <li className='shelters-list__item shelter'>
                    <div className='shelter__inf'>
                      <h3 className='shelter__title'>
                        Приют Бирюлево
                      </h3>
                      <p className='shelter__address'>
                        Востряковский пр-д, 10А,
                        Москва, Россия.
                      </p>
                      <p className='shelter__time'>
                        <span
                          className='shelter__time-heading'
                        >
                          Часы работы:
                          {' '}
                        </span>
                        10:00 -
                        18:00
                      </p>
                    </div>
                    <Link to='#'><img src={websiteIcon} alt='website' /></Link>
                  </li>
                </ul>
                <Placemark
                  geometry={[55.684758, 37.738521]}
                  properties={
                    {
                      balloonContentHeader: '              <h3 class="shelter__title shelter__title_balloon">\n'
                                + '                Приют Бирюлево\n'
                                + '              </h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '              <p class="shelter__time shelter__time_balloon"><span\n'
                                + '                class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '                18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[55.644658, 37.798571]}
                  properties={
                    {
                      balloonContentHeader: '<h3 class="shelter__title shelter__title_balloon">\n'
                                + 'Приют Бирюлево\n'
                                + '</h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '<p class="shelter__time shelter__time_balloon"><span\n'
                                + 'class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[55.644658, 37.638571]}
                  properties={
                    {
                      balloonContentHeader: '<h3 class="shelter__title shelter__title_balloon">\n'
                                + 'Приют Бирюлево\n'
                                + '</h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '<p class="shelter__time shelter__time_balloon"><span\n'
                                + 'class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[55.744658, 37.898571]}
                  properties={
                    {
                      balloonContentHeader: '<h3 class="shelter__title shelter__title_balloon">\n'
                                + 'Приют Бирюлево\n'
                                + '</h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '<p class="shelter__time shelter__time_balloon"><span\n'
                                + 'class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[55.694758, 37.728521]}
                  properties={
                    {
                      balloonContentHeader: '<h3 class="shelter__title shelter__title_balloon">\n'
                                + 'Приют Бирюлево\n'
                                + '</h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '<p class="shelter__time shelter__time_balloon"><span\n'
                                + 'class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[55.684658, 37.738571]}
                  properties={
                    {
                      balloonContentHeader: '              <h3 class="shelter__title shelter__title_balloon">\n'
                                + '                Приют Бирюлево\n'
                                + '              </h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '              <p class="shelter__time shelter__time_balloon"><span\n'
                                + '                class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '                18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[52.684758, 30.738521]}
                  properties={
                    {
                      balloonContentHeader: '              <h3 class="shelter__title shelter__title_balloon">\n'
                                + '                Приют Бирюлево\n'
                                + '              </h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '              <p class="shelter__time shelter__time_balloon"><span\n'
                                + '                class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '                18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
                <Placemark
                  geometry={[51.684758, 39.738521]}
                  properties={
                    {
                      balloonContentHeader: '              <h3 class="shelter__title shelter__title_balloon">\n'
                                + '                Приют Бирюлево\n'
                                + '              </h3>\n',
                      balloonContentBody: '<p class="shelter__address shelter__address_balloon">Востряковский пр-д, 10А, Москва, Россия.</p>',
                      balloonContentFooter: '              <p class="shelter__time shelter__time_balloon"><span\n'
                                + '                class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>10:00 -\n'
                                + '                18:00</p>',
                    }
                  }
                  options={
                    {
                      iconLayout: 'default#image',
                      iconImageHref: pawIcon,
                      iconImageSize: [20, 20],
                      iconImageOffset: [-20, -20],
                    }
                  }
                />
              </Map>
            </div>
          </YMaps>
        </section>

      </main>
    </MainContainer>
  );
};

export default MapPage;
