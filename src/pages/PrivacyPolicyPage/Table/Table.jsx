import React from 'react';
import './Table.scss';

const Table = () => {
  return (
    <table className='table standard-font_type_small'>
      <tbody>
        <tr>
          <td className='table__cell'>Цель обработки</td>
          <td className='table__cell'>
            Информирование Пользователя посредством отправки электронных писем и предоставление доступа Пользователю к сервисам, информации и/или материалам,
            содержащимся на веб-сайте
          </td>
        </tr>

        <tr>
          <td className='table__cell'>Персональные данные</td>
          <td className='table__cell'>
            <ul className='table__list'>
              <li>фамилия, имя, отчество</li>
              <li>электронный адрес</li>
              <li>номера телефонов</li>
              <li>год, месяц, дата и место рождения</li>
              <li>фотографии</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td className='table__cell'>Правовые основания</td>
          <td className='table__cell'>уставные (учредительные) документы Оператора</td>
        </tr>

        <tr>
          <td className='table__cell'>Виды обработки персональных данных</td>
          <td className='table__cell'>
            <ul className='table__list'>
              <li>Сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных данных</li>
              <li>Отправка информационных писем на адрес электронной почты</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
