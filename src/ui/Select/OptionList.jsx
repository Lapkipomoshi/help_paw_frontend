import React from 'react';
import './Select.scss';

const OptionList = ({ options, isMulti, required, onSelectChange, selected }) => {
  return options.map((option) => {
    return (
      <li className='select__checkboxes-item'>
        <label className='select__check-label' htmlFor={option.id} key={option.id}>
          <input
            className='select__checkbox'
            hidden={!isMulti}
            type='checkbox'
            name={option.id}
            id={option.id}
            onChange={onSelectChange}
            checked={selected.includes(option.id)}
            required={required}
          />

          {option.label}
        </label>
      </li>
    );
  });
};

export default OptionList;
