export const defaultFormValues = { position: '', salary: null, is_ndfl: [], schedule: [], education: [], description: '' };

// TODO подключить бэк, эндпоинт для получения есть, пока замокано
export const shiftOptions = [
  { label: 'Полный день', id: 'slug1' },
  { label: 'Сменный', id: 'slug2' },
  { label: 'Гибкий', id: 'slug3' },
  { label: 'Удаленная работа', id: 'slug4' },
];

export const salaryOptions = [
  { label: 'На руки', id: '11' },
  { label: 'с НДФЛ', id: '22' },
];

export const educationOptions = [
  { label: 'Не требуется', id: '111' },
  { label: 'Среднее специальное', id: '222' },
  { label: 'Высшее', id: '333' },
];
