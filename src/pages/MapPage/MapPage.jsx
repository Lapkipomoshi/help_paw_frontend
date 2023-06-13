import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MapPage.css';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import MainContainer from '../../components/MainContainer/MainContainer';
import pawRed from './svg/paw-red.svg';
import pawYellow from './svg/paw-yellow.svg';
import pawGreen from './svg/paw-green.svg';
import websiteIcon from '../../images/icons/ic_website.svg';
import SearchInput from '../../components/SearchInput/SearchInput';
import mapApi from './api';

const MapPage = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    mapApi
      .getMap()
      .then((resArr) => {
        const newCoordinates = resArr
          .filter((res) => {
            return 'lat' in res && 'long' in res && res.long !== null;
          })
          .map((res) => {
            return {
              lat: +res.lat,
              long: +res.long,
              address: res.address,
              name: res.name,
              startHour: res.working_from_hour,
              finishHour: res.working_to_hour,
              link: res.link,
              image: res.profile_image,
              warning: res.warning,
            };
          });

        setCoordinates(newCoordinates);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <MainContainer>
      <main>
        <section className='search-section'>
          <SearchInput />
          <Link className='search-section__link' to='/shelters/list'>
            Показать приюты списком
          </Link>
        </section>
        <section className='section_with-background'>
          <YMaps>
            <div className='container container_flex-row section__content'>
              <Map
                style={{ position: 'relative', width: '100%', height: 914 }}
                defaultState={{ center: [55.65, 37.5], zoom: 11, controls: [] }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              >
                <ul className='shelters-list'>
                  {coordinates.map((el) => {
                    return (
                      <li className='shelters-list__item shelter' key={`${el.lat}-${el.long}`}>
                        <div className='shelter__inf'>
                          <h3 className='shelter__title'>{el.name}</h3>
                          <p className='shelter__address'>{el.address}</p>
                          <p className='shelter__time'>
                            <span className='shelter__time-heading'>Часы работы: </span>
                            {el.startHour}-{el.finishHour}
                          </p>
                        </div>
                        <Link to='#'>
                          <img src={websiteIcon} alt='сайт' />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {coordinates.map((el) => {
                  let pawIcon = pawYellow;
                  if (el.warning === 'green') {
                    pawIcon = pawGreen;
                  } else if (el.warning === 'red') {
                    pawIcon = pawRed;
                  }

                  return (
                    <Placemark
                      key={`${el.lat}-${el.long}`}
                      geometry={[el.lat, el.long]}
                      properties={{
                        balloonContentHeader: `<h3 class="shelter__title shelter__title_balloon">${el.name}</h3>`,
                        balloonContentBody: `<p class="shelter__address shelter__address_balloon">${el.address}</p>`,
                        balloonContentFooter:
                          '<p class="shelter__time shelter__time_balloon">' +
                          '<span class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>' +
                          `${el.startHour}-${el.finishHour}</p>`,
                      }}
                      options={{
                        iconLayout: 'default#image',
                        iconImageHref: pawIcon,
                        iconImageSize: [23, 23],
                        iconImageOffset: [-20, -20],
                      }}
                    />
                  );
                })}
                ( )
              </Map>
            </div>
          </YMaps>
        </section>
      </main>
    </MainContainer>
  );
};

export default MapPage;
