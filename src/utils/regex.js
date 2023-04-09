// регулярные выражения для валидации инпутов
export const NAME_REGEX = /^[A-Za-zа-яА-ЯёЁ\d-\s]+$/;
export const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
export const NUMBER = /\d+/;
export const URL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
export const TEL = /^([+]?[0-9\s-()]{10,20})*$/i;
export const TIME = /([01][0-9]|2[0-3]):[0-5][0-9]/;
export const TELEGRAM = /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/;
export const TEXT = /[\wа-яА-яеЁ\s\n.?!+%$*@,]+/;
