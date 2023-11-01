/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useRef } from 'react';
import './Select.scss';
import OptionList from './OptionList';
import Arrow from './svg/Arrow';
import useOutsideClick from '../../hooks/useOutsideClick';

const Select = ({ label, onChange, options, id: selectId, isMulti }) => {
  const [isSelectOpen, setIsOpenedSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectRef = useRef(null);

  const addSelectedItem = (slug) => {
    const newSelected = isMulti ? [...selected, slug] : [slug];
    setSelected(newSelected);

    onChange(selectId, newSelected);
  };

  const deleteSelectedItem = (slug) => {
    const newSelected = selected.filter((item) => {
      return item !== slug;
    });

    setSelected(newSelected);
    onChange(selectId, newSelected);
  };

  const handleSelectChange = (e) => {
    const { id } = e.target;

    if (selected.includes(id)) {
      deleteSelectedItem(id);
    } else {
      addSelectedItem(id);
    }
  };

  const handleDeleteItem = (slug) => {
    deleteSelectedItem(slug);
  };

  const selectedOptions = options.filter((item) => {
    return selected.includes(item.slug);
    // return selected.includes(item.id);
  });

  useOutsideClick(selectRef, () => {
    if (isSelectOpen) {
      setIsOpenedSelect((prevOpen) => {
        return !prevOpen;
      });
    }
  });

  return (
    <div className='select' ref={selectRef}>
      <label className='select__label standard-font_type_small'>{label}</label>

      <div className='select__container'>
        {/* TODO после того, как дизайнер отрисует какие должны быть изменения внешнего вида селекта после выбора
        большогого количества вариантов, добавить изменения в css. макет 6.2.2.17 */}
        <div className='select__selected-items-container'>
          <ul className='select__selected-items-list'>
            {selectedOptions.length !== 0 &&
              selectedOptions.map((item) => {
                return (
                  <li className='select__selected-item-container' key={item.slug}>
                    <p className='select__selected-item standard-font_type_smallest'>{item.name}</p>
                    <button
                      className='select__selected-item-delete'
                      type='button'
                      onClick={() => {
                        handleDeleteItem(item.slug);
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
            <Arrow />
          </button>
        </div>
        <ul className={`select__checkboxes-container ${isSelectOpen && 'select__checkboxes_opened'}`}>
          <OptionList options={options} isMulti={isMulti} onSelectChange={handleSelectChange} selected={selected} />
        </ul>
      </div>
    </div>
  );
};

export default Select;
