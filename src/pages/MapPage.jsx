import './MapPage.css';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import pawIcon from '../images/icons/ic_paw.svg';

const MapPage = () => (
  <YMaps>
    <div className='container container__flex_row'>
      <ul className="shelters-list">
        <li className="shelters-list__item shelter">
          <h3 className="shelter__title">
            Приют Бирюлево
          </h3>
          <p className="shelter__address">
            Востряковский пр-д, 10А,
            Москва, Россия.
          </p>
          <p className="shelter__time"><span className="text-accent">Часы работы: </span>10:00 -
            18:00</p>
        </li>
        <li className="shelters-list__item shelter">
          <h3 className="shelter__title">
            Приют Бирюлево
          </h3>
          <p className="shelter__address">
            Востряковский пр-д, 10А,
            Москва, Россия.
          </p>
          <p className="shelter__time"><span className="text-accent">Часы работы: </span>10:00 -
            18:00</p>
        </li>
      </ul>
      <Map height={1032} width={914} defaultState={{ center: [55.75, 37.57], zoom: 9, controls: [] }}>
        <Placemark geometry={[55.684758, 37.738521]} options={
          {
            iconLayout: 'default#image',
            iconImageHref: pawIcon,
            iconImageSize: [20, 20],
            iconImageOffset: [-20, -20],
          }}/>
        <Placemark geometry={[55.644658, 37.798571]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
        <Placemark geometry={[55.644658, 37.638571]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
        <Placemark geometry={[55.744658, 37.898571]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
        <Placemark geometry={[55.694758, 37.728521]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
        <Placemark geometry={[55.684658, 37.738571]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
        <Placemark geometry={[52.684758, 30.738521]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
        <Placemark geometry={[51.684758, 39.738521]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],
                     }}/>
      </Map>
    </div>
  </YMaps>
);

export default MapPage;
