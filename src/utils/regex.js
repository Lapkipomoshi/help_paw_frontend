/* eslint-disable no-useless-escape */
// регулярные выражения для валидации инпутов
export const NAME_REGEX = /^[A-Za-zа-яА-ЯёЁ\d-\s]+$/;
export const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
export const TEL = /^([+]?[0-9\s-\(\)]{10,20})*$/i;
