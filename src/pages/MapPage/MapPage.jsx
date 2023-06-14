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
      .then((sheltersArray) => {
        const newCoordinates = sheltersArray
          .filter((shelter) => {
            return shelter.long !== null && shelter.lat !== null;
          })
          .map((res) => {
            return {
              id: res.id,
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
                style={{ position: 'relative', width: '100%', height: 1032 }}
                defaultState={{ center: [55.69, 37.5], zoom: 12, controls: [] }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              >
                <ul className='shelters-list'>
                  {coordinates.map((shelter) => {
                    return (
                      <li className='shelters-list__item' key={`${shelter.lat}-${shelter.long}`}>
                        <Link to={`/shelters/${shelter.id}/about`} className='shelter'>
                          <div className='shelter__inf'>
                            <h3 className='shelter__title'>{shelter.name}</h3>
                            <p className='shelter__address'>{shelter.address}</p>
                            <p className='shelter__time'>
                              <span className='shelter__time-heading'>Часы работы: </span>
                              {shelter.startHour}-{shelter.finishHour}
                            </p>
                          </div>
                        </Link>
                        {shelter.link && (
                          <a href={shelter.link} className='shelter__website-link' target='_blank' rel='noreferrer'>
                            <img src={websiteIcon} alt='сайт приюта' />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {coordinates.map((shelter) => {
                  let pawIcon = pawYellow;
                  if (shelter.warning === 'green') {
                    pawIcon = pawGreen;
                  } else if (shelter.warning === 'red') {
                    pawIcon = pawRed;
                  }

                  return (
                    <Placemark
                      key={`${shelter.lat}-${shelter.long}`}
                      geometry={[shelter.lat, shelter.long]}
                      properties={{
                        balloonContentHeader: `<h3 class="shelter__title shelter__title_balloon">${shelter.name}</h3>`,
                        balloonContentBody: `<p class="shelter__address shelter__address_balloon">${shelter.address}</p>`,
                        balloonContentFooter:
                          '<p class="shelter__time shelter__time_balloon">' +
                          '<span class="shelter__time-heading shelter__time-heading_balloon">Часы работы: </span>' +
                          `${shelter.startHour}-${shelter.finishHour}</p>`,
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
              </Map>
            </div>
          </YMaps>
        </section>
      </main>
    </MainContainer>
  );
};

export default MapPage;
