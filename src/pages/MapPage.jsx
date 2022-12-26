import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import pawIcon from '../images/icons/ic_paw.svg';

const MapPage = () => (
  <YMaps>
    <div>
      <img src={pawIcon} alt=""/>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9, controls: [] }}>
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
                       iconImageOffset: [-20, -20],} }/>
        <Placemark geometry={[55.744658, 37.898571]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],} }/>
        <Placemark geometry={[55.694758, 37.728521]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],} }/>
        <Placemark geometry={[55.684658, 37.738571]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],} }/>
        <Placemark geometry={[52.684758, 30.738521]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],} }/>
        <Placemark geometry={[51.684758, 39.738521]}
                   options={
                     {
                       iconLayout: 'default#image',
                       iconImageHref: pawIcon,
                       iconImageSize: [20, 20],
                       iconImageOffset: [-20, -20],} }/>
      </Map>
    </div>
  </YMaps>
);

export default MapPage;
