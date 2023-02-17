export const baseUrl = 'https://lapkipomoshi.ru/api';
export const apiHeaders = {
  'Content-Type': 'application/json',
};

export const shelterLinkList = [
  { to: 'about', caption: 'О приюте' },
  { to: 'how-to-help', caption: 'Как помочь' },
  { to: 'news', caption: 'Новости' },
  { to: 'pets', caption: 'Питомцы' },
  { to: 'vacancies', caption: 'Вакансии' },
];

export const colorLinkList = [
  {
    to: 'red',
    caption: 'Красный',
    explanation: 'Красные приюты - те, которым для сбора нужной суммы не хватает больше всего. Им особенно нужна ваша помощь!',
  },
  {
    to: 'yellow',
    caption: 'Жёлтый',
    explanation: 'Жёлтые приюты - те, которым для сбора нужной суммы не хватает совсем чуть-чуть. Возможно, именно вы поможете закрыть сбор!',
  },
  {
    to: 'green',
    caption: 'Зелёный',
    explanation: 'Зелёные приюты - те, у которых успешно закрыт сбор материальных средств. Но вы так же можете оказать им нематериальную помощь!',
  },
];
