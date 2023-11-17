const tooLong = 'Превышено ограничение по количеству символов';
const invalidSymbol = 'Использваны недопустимые символы';

// имя
export const NAME_INVALID = 'Имя может содержать только буквы, пробел или дефис';
export const NAME_NOT_FOUND = 'Введите имя пользователя';
export const NAME_TOO_SHORT = 'Длина имени должна быть не менее 2 символов';
export const NAME_TOO_LONG = 'Длина имени должна быть не более 50 символов';
export const NAME_ONLY_SYMBOLS = 'Имя не может содержать только символы';

// почта
export const EMAIL_INVALID = 'Введен некорректный email';
export const EMAIL_NOT_FOUND = 'Введите email';

export const EMAIL = {
  NOT_FOUND: 'Введите email',
  INVALID: 'Введён некорректный email',
  TOO_LONG: 'Слишком длинный email',
};

// пароль
export const PASSWORD_INVALID = 'Введён недопустимый символ';
export const PASSWORD_TOO_SHORT = 'Длина пароля должна быть не менее 10 символов';
export const PASSWORD_TOO_LONG = 'Длина пароля должна быть не более 100 символов';
export const PASSWORD_NOT_FOUND = 'Введите пароль';
export const PASSWORD_ONLY_NUMBERS = 'Пароль не должен содержать только цифры';
export const PASSWORD_SAME_EMAIL = 'Пароль не должен совпадать с email';

// телефон
export const TEL = {
  NOT_FOUND: 'Введите номер телефона',
  TOO_SHORT: 'Слишком короткий номер телефона',
  TOO_LONG: 'Слишком длинный номер телефона',
};

// ФИО владельца приюта
export const FIO = {
  NOT_FOUND: 'Введите ФИО владельца приюта',
  TOO_SHORT: 'Слишком короткое ФИО',
  TOO_LONG: 'Превышено ограничение по длине для строки ввода ФИО',
  INVALID: 'ФИО может содержать только буквы, пробел или дефис',
};

// время
export const TIME = {
  NOT_FOUND: 'Укажите время',
  INVALID: 'Укажите время в формате 24:00',
};

// название приюта
export const SHELTER_NAME = {
  NOT_FOUND: 'Введите название приюта',
  INVALID: 'В название могут быть только кириллица, латиница, пробел и знаки: "-", "_"',
  TOO_LONG: 'Название приюта не может превышать 50 симоволов',
};

// ИНН
export const INN = {
  NOT_FOUND: 'Введите ИНН',
  TOO_SHORT: 'ИНН состоит из 10 цифр',
  TOO_LONG: 'ИНН состоит из 10 цифр',
  INVALID: 'ИНН состоит только из цифр',
};

// страница приюта
export const SHELTER_SITE = {
  INVALID: 'Введён неправильный url-адрес',
  TOO_LONG: 'Слишком длинная ссылка',
};

// адрес приюта
export const ADDRESS = {
  NOT_FOUND: 'Введите адрес приюта',
  TOO_LONG: 'Слишком длинный адрес',
};

// Телеграм
export const TELEGRAM = {
  INVALID: 'Введена неправильная ссылка. Попробуйте начать с t.me/',
  TOO_LONG: 'Слишком длинная ссылка',
};

// Одноклассники
export const ODNOKLASSNIKI = {
  INVALID: 'Введена неправильная ссылка. Попробуйте начать с ok.ru/',
  TOO_LONG: 'Слишком длинная ссылка',
};

// ВК
export const VKONTAKTE = {
  INVALID: 'Введена неправильная ссылка. Попробуйте начать с vk.com/',
  TOO_LONG: 'Слишком длинная ссылка',
};

// описание приюта
export const DESCRIPTION = {
  NOT_FOUND: 'Опишите приют',
  TOO_LONG: tooLong,
  INVALID: invalidSymbol,
};

// название вакансии
export const VACANCY_NAME = {
  NOT_FOUND: 'Введите название вакансии',
  INVALID: 'В названии могут быть только кириллица, латиница, пробел и знаки: "-", "_"',
  TOO_LONG: 'Название вакансии не может превышать 30 симоволов',
};

// заработная плата вакансии приюта
export const VACANCY_SALARY = {
  TOO_LONG: tooLong,
  NOT_FOUND: 'Введите заработную плату',
};

// описание вакансии приюта
export const VACANCY_DESCRIPTION = {
  NOT_FOUND: 'Опишите вакансию',
  TOO_LONG: tooLong,
  INVALID: invalidSymbol,
};

// сумма пожертвования
export const DONATION_AMOUNT = {
  TOO_LONG: tooLong,
  NOT_FOUND: 'Введите сумму пожертвования',
};