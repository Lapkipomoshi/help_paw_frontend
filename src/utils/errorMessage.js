// имя
export const NAME_INVALID = 'Имя может содержать только буквы, пробел или дефис';
export const NAME_NOT_FOUND = 'Введите имя пользователя';
export const NAME_TOO_SHORT = 'Длина имени должна быть не менее 2 символов';
export const NAME_TOO_LONG = 'Длина имени должна быть не более 20 символов';

// почта
export const EMAIL_INVALID = 'Введен некорректный email';
export const EMAIL_NOT_FOUND = 'Введите email';

export const EMAIL = {
  NOT_FOUND: 'Введите email',
  INVALID: 'Введён некорректный email',
  TOO_LONG: 'Слишком длинный email',
};

// пароль
export const PASSWORD_INVALID = 'Пароль должен содержать строчные и прописные буквы, цифры';
export const PASSWORD_TOO_SHORT = 'Длина пароля должна быть не менее 8 символов';
export const PASSWORD_TOO_LONG = 'Длина пароля должна быть не более 15 символов';
export const PASSWORD_NOT_FOUND = 'Введите пароль';

// телефон
export const TEL = {
  NOT_FOUND: 'Введите номер телефона',
  TOO_SHORT: 'Введите 10 цифр номера телефона без кода страны',
  TOO_LONG: 'Введите 10 цифр номера телефона без кода страны',
  INVALID: 'Введён некорректный номер телефона',
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
  TOO_SHORT: 'ИНН состоит из 12 цифр',
  TOO_LONG: 'ИНН состоит из 12 цифр',
  INVALID: 'ИНН состоит только из цифр',
};

// страница приюта
export const SHELTER_SITE = {
  INVALID: 'Неправильная ссылка',
};

// адрес приюта
export const ADDRESS = {
  NOT_FOUND: 'Введите адрес приюта',
};

// Телеграм
export const TELEGRAM = {
  INVALID: 'Неверная ссылка на Телеграм',
};

// Одноклассники
export const OK = {
  INVALID: 'Введён не URL-адрес',
};

// ВК
export const VK = {
  INVALID: 'Введён не URL-адрес',
};

// описание приюта
export const DESCRIPTION = {
  NOT_FOUND: 'Опишите приюта',
  TOO_LONG: 'Превышено ограничение по количеству символов',
  INVALID: 'Использваны недопустимые символы',
};
