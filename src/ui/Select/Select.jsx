/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import './Select.scss';
import Arrow from './svg/Arrow';

// TODO добавить закрытие дропдауна при клике вне его

// TODO добавить на submit формы, если не выбрано ни одного значения, то показывать ошибку <p className='select__error-message'>

// TODO доработать required, не могу найти ошибку почему не посвечивается при не заполнении)) и почему не добавляется * в название. Пришлось ручками пока

const Select = ({ label, onChange, options, id: selectId, isMulti, required }) => {
  const [isSelectOpen, setIsOpenedSelect] = useState(false);
  const [selected, setSelected] = useState([]);

  const addSelectedItem = (id) => {
    if (isMulti) {
      const newSelected = [...selected, id];
      setSelected(newSelected);

      onChange(selectId, newSelected);
    } else {
      setSelected([id]);
    }
  };

  const deleteSelectedItem = (id) => {
    const newSelected = selected.filter((item) => {
      return item !== id;
    });

    setSelected(newSelected);
    onChange(selectId, newSelected);
  };

  const handleCheckbox = (e) => {
    const { id } = e.target;

    if (selected.includes(id)) {
      deleteSelectedItem(id);
    } else {
      addSelectedItem(id);
    }
  };

  const handleDeleteItem = (id) => {
    deleteSelectedItem(id);
  };

  const selectedOptions = options.filter((item) => {
    return selected.includes(item.id);
  });

  return (
    <div className='select'>
      <label className='select__label standard-font_type_small'>{label}</label>

      <div className='select__container'>
        <div className='select__selected-items-container'>
          <ul className='select__selected-items-list'>
            {selectedOptions.length !== 0 &&
              selectedOptions.map((item) => {
                return (
                  <li className='select__selected-item-container' key={item.id}>
                    <p className='select__selected-item standard-font_type_smallest'>{item.label}</p>
                    <button
                      className='select__selected-item-delete'
                      type='button'
                      onClick={() => {
                        handleDeleteItem(item.id);
                      }}
                    />
                  </li>
                );
              })}
          </ul>

          <button
            className='select__toggle-arrow'
            type='button'
            onClick={() => {
              setIsOpenedSelect(!isSelectOpen);
            }}
          >
            <Arrow openedSelect={isSelectOpen} />
          </button>
        </div>

        <ul className={`select__checkboxes-container ${isSelectOpen && 'select__checkboxes_opened'}`}>
          {options.map((option) => {
            return (
              <li className='select__checkboxes-item'>
                <label className='select__check-label' htmlFor={option.id} key={option.id}>
                  <input
                    className={isMulti ? 'select__checkbox' : 'select__checkbox_false'}
                    type='checkbox'
                    name={option.id}
                    id={option.id}
                    onChange={handleCheckbox}
                    checked={selected.includes(option.id)}
                    required={required}
                  />

                  {option.label}
                </label>
              </li>
            );
          })}
        </ul>
        {/* <p className='select__error-message'>Пожалуйста, выберете значение</p> */}
      </div>
    </div>
  );
};

export default Select;
