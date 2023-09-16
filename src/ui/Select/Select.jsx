/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useRef } from 'react';
import './Select.scss';
import OptionList from './OptionList';
import Arrow from './svg/Arrow';
import useOutsideClick from '../../hooks/useOutsideClick';

const Select = ({ label, onChange, options, id: selectId, isMulti, required }) => {
  const [isSelectOpen, setIsOpenedSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectRef = useRef(null);

  const addSelectedItem = (id) => {
    const newSelected = isMulti ? [...selected, id] : [id];
    setSelected(newSelected);

    onChange(selectId, newSelected);
  };

  const deleteSelectedItem = (id) => {
    const newSelected = selected.filter((item) => {
      return item !== id;
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

  const handleDeleteItem = (id) => {
    deleteSelectedItem(id);
  };

  const selectedOptions = options.filter((item) => {
    return selected.includes(item.id);
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
            <Arrow />
          </button>
        </div>
        <ul className={`select__checkboxes-container ${isSelectOpen && 'select__checkboxes_opened'}`}>
          <OptionList options={options} isMulti={isMulti} onSelectChange={handleSelectChange} selected={selected} required={required} />
        </ul>
      </div>
    </div>
  );
};

export default Select;
