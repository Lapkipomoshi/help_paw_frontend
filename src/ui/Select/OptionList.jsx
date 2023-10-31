import React from 'react';
import './Select.scss';

const OptionList = ({ options, isMulti, onSelectChange, selected }) => {
  return options.map((option) => {
    return (
      <li className='select__checkboxes-item' key={option.slug}>
        <label className='select__check-label' htmlFor={option.slug}>
          <input
            className='select__checkbox'
            hidden={!isMulti}
            type='checkbox'
            name={option.slug}
            id={option.slug}
            onChange={onSelectChange}
            checked={selected.includes(option.slug)}
          />

          {option.name}
        </label>
      </li>
    );
  });
};

export default OptionList;
